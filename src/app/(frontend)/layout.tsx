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
      <body className="min-h-screen p-6 sm:p-12">
        <main>
          <Header />
          {children}
          {/* <Footer /> */}
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
    <footer className="text-xs grid gap-1 text-zinc-400">
      <p>
        © {pay.name} / 2025 / made by <a href="https://9d8.dev">9d8</a>
      </p>
    </footer>
  )
}
