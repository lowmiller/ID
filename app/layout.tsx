import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif'
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'ID Hot Yoga | Premium Yoga Studios NYC',
  description: 'Experience transformative hot yoga in NYC. 5 locations serving Lower East Side, Nomad, Financial District, Harlem & East Hampton.',
  metadataBase: new URL('https://idhotyoga.com'),
  keywords: ['hot yoga', 'yoga studios', 'NYC yoga', 'yoga classes'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <head>
        <meta name="theme-color" content="#228b22" />
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
