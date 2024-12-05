import '../globals.css'

import { Inter as Font } from 'next/font/google'
import type { Metadata } from 'next'
import { pay } from 'site.config'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Section, Container } from '@/components/craft'

export const metadata: Metadata = {
  title: pay.title,
  description: pay.desc,
  metadataBase: new URL(pay.url),
}

const font = Font({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body className="min-h-screen">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

const Header = () => {
  return (
    <Section className="py-6 md:py-6">
      <Container className="py-6 md:py-6">
        <nav className="flex gap-4 justify-between items-center">
          <h2 className="font-medium">
            <Link href="/" className="group">
              {pay.name}
            </Link>
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <a href="https://payloadcms.com/docs">Payload Docs</a>
            </Button>
            <Button asChild>
              <a href="https://github.com/9d8dev/pay">Github</a>
            </Button>
          </div>
        </nav>
      </Container>
    </Section>
  )
}

const Footer = () => {
  return (
    <Section className="py-6 md:py-6">
      <Container className="py-6 md:py-6">
        <footer className="text-muted-foreground">
          <p>
            © {pay.name}, 2025 / made at <a href="https://9d8.dev">9d8</a>
          </p>
        </footer>
      </Container>
    </Section>
  )
}
