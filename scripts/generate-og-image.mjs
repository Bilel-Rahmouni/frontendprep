import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '../public')

const ogSvg = path.join(publicDir, 'og-image.svg')
const faviconSvg = path.join(publicDir, 'favicon.svg')

await sharp(await fs.readFile(ogSvg))
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, 'og-image.png'))

await sharp(await fs.readFile(ogSvg))
  .resize(1200, 630)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(publicDir, 'og-image.jpg'))

await sharp(await fs.readFile(faviconSvg))
  .resize(180, 180)
  .png()
  .toFile(path.join(publicDir, 'apple-touch-icon.png'))

await sharp(await fs.readFile(faviconSvg))
  .resize(512, 512)
  .png()
  .toFile(path.join(publicDir, 'pwa-512.png'))

await sharp(await fs.readFile(faviconSvg))
  .resize(192, 192)
  .png()
  .toFile(path.join(publicDir, 'pwa-192.png'))

console.log('SEO: generated og-image.png, og-image.jpg, apple-touch-icon.png, pwa icons')
