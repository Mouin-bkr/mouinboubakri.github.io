import { profile } from '@/lib/data/profile'
import { getSiteUrl } from '@/lib/seo'

export function PersonStructuredData() {
  const siteUrl = getSiteUrl()
  const sameAs = [profile.githubUrl, profile.linkedinUrl].filter(Boolean)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.title,
    description: profile.bio,
    sameAs,
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'PostgreSQL',
      'Docker',
      'DevOps',
      'Hadoop',
      'Computer Vision',
      'Machine Learning',
      'UI/UX Design',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebsiteStructuredData() {
  const siteUrl = getSiteUrl()
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${profile.name} | Full‑Stack Developer`,
    url: siteUrl,
    description: 'Modern web, DevOps, and data‑driven apps built with Next.js and TypeScript.',
    author: {
      '@type': 'Person',
      name: profile.name,
      url: siteUrl,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
