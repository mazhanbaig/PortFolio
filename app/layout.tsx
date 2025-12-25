import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M AZHAN | Creative Developer',
  description: 'Personal portfolio showcasing innovative software development and design projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-bg text-white overflow-x-hidden`}>
        <Navigation />
        <main className="relative">
          {/* Ambient Background */}
          <div className="fixed inset-0 bg-gradient-to-br from-dark-bg via-black to-dark-surface opacity-50"></div>
          <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none"></div>

          <div className="relative z-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}