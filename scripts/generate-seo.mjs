import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from './load-env.mjs'
import {
  getSeoRoutes,
  getSiteUrl,
  routeChangefreq,
  routePriority,
} from './seo-routes.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '../public')

await loadEnv()

const siteUrl = getSiteUrl()
const routes = getSeoRoutes()
const today = new Date().toISOString().slice(0, 10)

const urlEntries = routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${routeChangefreq(route)}</changefreq>
    <priority>${routePriority(route)}</priority>
  </url>`,
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

await fs.writeFile(path.join(publicDir, 'sitemap.xml'), sitemap)
await fs.writeFile(path.join(publicDir, 'robots.txt'), robots)

console.log(`SEO: wrote sitemap (${routes.length} URLs) and robots.txt for ${siteUrl}`)
