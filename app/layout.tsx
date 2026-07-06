import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

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
      <body className={`${spaceGrotesk.className} bg-dark-bg text-white overflow-x-hidden relative min-h-screen`}>
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}