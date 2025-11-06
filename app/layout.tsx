import './globals.css';
import type { Metadata } from 'next';
// Removed next/font (network abort issue earlier); using self-hosted Inter Variable from globals.css
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { Toaster } from '@/components/ui/sonner';
import { PersonStructuredData, WebsiteStructuredData } from '@/components/structured-data';
import { baseMetadata } from '@/lib/seo';


export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonStructuredData />
        <WebsiteStructuredData />
        <meta name="theme-color" content="#3b82f6" />
  <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
  <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
