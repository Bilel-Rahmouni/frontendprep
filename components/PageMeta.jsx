import { useEffect } from 'react'
import { DEFAULT_DESCRIPTION, OG_IMAGE, SITE_NAME, SITE_URL } from '../lib/site'

function upsertMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function PageMeta({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  ready = true,
  noindex = false,
}) {
  useEffect(() => {
    if (!ready) {
      window.__PRERENDER_READY__ = false
      return
    }

    const fullTitle = title.includes(SITE_NAME) ? title : `${title} · ${SITE_NAME}`
    const url = `${SITE_URL}${path}`

    document.title = fullTitle
    upsertLink('canonical', url)
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', OG_IMAGE)
    upsertMeta('property', 'og:image:type', 'image/png')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', OG_IMAGE)
    upsertMeta('name', 'robots', noindex ? 'noindex,follow' : 'index,follow')

    window.__PRERENDER_READY__ = true
    document.dispatchEvent(new Event('prerender-ready'))
  }, [title, description, path, ready, noindex])

  return null
}
