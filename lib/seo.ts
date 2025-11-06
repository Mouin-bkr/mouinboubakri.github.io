import { Metadata } from 'next'

export function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '')
  return envUrl && /^https?:\/\//.test(envUrl) ? envUrl : 'https://example.tech'
}

const SITE_URL = getSiteUrl()

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Mouin Boubakri | Full‑Stack Developer',
    template: '%s | Mouin Boubakri'
  },
  description: 'Full‑stack developer building modern web apps with Next.js, TypeScript, DevOps (Docker, CI/CD) and data‑driven features (CV/ML).',
  keywords: [
    'Mouin Boubakri', 'portfolio', 'full‑stack developer', 'frontend', 'backend',
    'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'DevOps',
    'Hadoop', 'Computer Vision', 'Machine Learning', 'AI', 'UI/UX', 'web performance'
  ],
  authors: [{ name: 'Mouin Boubakri', url: SITE_URL }],
  creator: 'Mouin Boubakri',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Mouin Boubakri',
    title: 'Mouin Boubakri | Full‑Stack Developer',
    description: 'Modern web, DevOps and data‑driven apps.',
  images: [`${SITE_URL}/icon.svg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mouin Boubakri | Full‑Stack Developer',
    description: 'Modern web, DevOps and data‑driven apps.',
    creator: '@',
  images: [`${SITE_URL}/icon.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: undefined,
    yahoo: undefined,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: { canonical: url },
  }
}
