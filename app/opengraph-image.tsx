// @ts-nocheck
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { getSiteUrl } from '@/lib/seo'

export const runtime = 'edge'
export const alt = 'Mouin Boubakri — Full‑Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Full‑Stack Developer'
  const siteUrl = getSiteUrl()

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '64px',
          background: 'linear-gradient(135deg, #0b0b0b 0%, #0f172a 100%)',
          color: 'white',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
        }}
      >
        <div style={{ opacity: 0.7, fontSize: 24 }}>{siteUrl.replace(/^https?:\/\//,'')}</div>
        <div style={{ fontSize: 80, fontWeight: 800, marginTop: 12, lineHeight: 1.1 }}>
          Mouin Boubakri
        </div>
        <div style={{ fontSize: 40, marginTop: 8 }}>{title}</div>
        <div style={{ marginTop: 24, display: 'flex', gap: 16, fontSize: 24, opacity: 0.9 }}>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Docker</span>
          <span>CV/ML</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
