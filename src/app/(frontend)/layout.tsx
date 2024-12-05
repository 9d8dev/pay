import '../globals.css'

import { Manrope as Font } from 'next/font/google'
import type { Metadata } from 'next'
import { pay } from 'site.config'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

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
      <body className="min-h-screen p-6 sm:p-12">
        <main className="grid gap-12">
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
    <nav>
      <h2 className="font-medium">
        <Link href="/" className="group">
          {pay.name}
        </Link>
      </h2>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="flex gap-4 justify-between">
      <p>
        © {pay.name} / 2025 / made by <a href="https://9d8.dev">9d8</a>
      </p>

      <Button asChild>
        <a className="underline underline-offset-2" href="https://payloadcms.com/docs">
          Payload Docs
        </a>
      </Button>
    </footer>
  )
}
