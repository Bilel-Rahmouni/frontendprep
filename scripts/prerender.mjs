import fs from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'
import { getPrerenderRoutes } from './seo-routes.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '../dist')
const routes = getPrerenderRoutes()

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

function routeToFile(route) {
  const segments = route.replace(/^\//, '').split('/').filter(Boolean)
  if (segments.length === 0) return path.join(distDir, 'index.html')
  return path.join(distDir, ...segments, 'index.html')
}

async function resolveFile(urlPath) {
  const clean = urlPath.split('?')[0] || '/'
  const relative = clean === '/' ? 'index.html' : clean.replace(/^\//, '')
  let filePath = path.join(distDir, relative)

  try {
    const stat = await fs.stat(filePath)
    if (stat.isDirectory()) filePath = path.join(filePath, 'index.html')
    return filePath
  } catch {
    return path.join(distDir, 'index.html')
  }
}

function startServer(port) {
  return new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const filePath = await resolveFile(req.url ?? '/')
        const data = await fs.readFile(filePath)
        const ext = path.extname(filePath)
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
        res.end(data)
      } catch {
        res.writeHead(404).end('Not found')
      }
    })

    server.listen(port, '127.0.0.1', () => resolve(server))
    server.on('error', reject)
  })
}

function cleanPrerenderHtml(html, baseUrl) {
  return html
    .replaceAll(`${baseUrl}/`, '/')
    .replaceAll(baseUrl, '')
}

const port = 4173
const server = await startServer(port)
const baseUrl = `http://127.0.0.1:${port}`

console.log(`Prerender: serving dist at ${baseUrl}`)

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 900 })

let done = 0

for (const route of routes) {
  const url = `${baseUrl}${route}`
  process.stdout.write(`Prerender ${++done}/${routes.length} ${route}\n`)

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 90000 })

  try {
    await page.waitForFunction(
      () =>
        window.__PRERENDER_READY__ === true &&
        !document.querySelector('.hub-page--loading'),
      { timeout: 45000 },
    )
  } catch {
    throw new Error(`Prerender did not become ready for ${route}`)
  }

  const html = cleanPrerenderHtml(await page.content(), baseUrl)
  const outPath = routeToFile(route)
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, html)
}

await browser.close()

await new Promise((resolve, reject) => {
  server.close((err) => (err ? reject(err) : resolve()))
})

console.log(`Prerender: saved ${routes.length} HTML snapshots to dist/`)
