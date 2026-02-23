import type { Metadata } from 'next'
import { DM_Sans, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-nav',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'iD Hot Yoga | Hot Like No Other',
  description: "NYC & East Hampton's top hot yoga studios. Hot yoga, hot Pilates, HIIT, and Yin classes at 5 locations.",
  metadataBase: new URL('https://idhotyoga.com'),
  keywords: ['hot yoga', 'yoga studios', 'NYC yoga', 'hot pilates', 'HIIT yoga', 'ID Hot Yoga'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${openSans.variable}`}>
      <head>
        <meta name="theme-color" content="#0D0D0D" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="font-sans bg-background text-foreground">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
