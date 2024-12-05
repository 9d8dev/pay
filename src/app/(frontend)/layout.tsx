import '../globals.css'

import { Manrope as Font } from 'next/font/google'
import type { Metadata } from 'next'
import { pay } from 'site.config'

import Link from 'next/link'

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
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  )
}

const Header = () => {
  return (
    <nav className="sticky top-12 z-10">
      <h2 className="font-medium">
        <Link href="/" className="group"></Link>
      </h2>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="text-xs grid gap-1 text-zinc-400">
      <p>
        designbooks.org / © <a href="https://github.com/brijr">brijr</a> / 2025
      </p>
    </footer>
  )
}
