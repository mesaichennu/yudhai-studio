import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  
  title: 'YUDHAI Studios | AI Visuals That Feel Real',
  description: 'Premium AI visual studio creating stunning ads, product visuals, social media content, and brand campaigns using cutting-edge AI technology.',
  keywords: ['AI visuals', 'AI ads', 'product visuals', 'AI studio', 'brand campaigns', 'social media content'],
  openGraph: {
    title: 'YUDHAI Studios | AI Visuals That Feel Real',
    description: 'Premium AI visual studio creating stunning ads, product visuals, social media content, and brand campaigns.',
    images: [
      {
        url: "/logo.png",
       
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
