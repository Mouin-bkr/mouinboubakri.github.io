import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = getSiteUrl()
  return {
    name: 'Mouin Boubakri — Portfolio',
    short_name: 'Mouin Portfolio',
    description: 'Full‑stack developer portfolio: Next.js, TypeScript, DevOps (Docker), and data‑driven apps.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0b0b0b',
    theme_color: '#3b82f6',
    icons: [
      {
        src: `${siteUrl}/icon.svg`,
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
