import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yudhai-studio.vercel.app'),

  title: 'YUDHAI Studios | AI Visuals That Feel Real',
  description: 'Premium AI visual studio creating stunning ads...',

  openGraph: {
    title: 'YUDHAI Studios | AI Visuals That Feel Real',
    description: 'Premium AI visual studio...',
    url: '/',
    siteName: 'YUDHAI Studios',
    images: [
      {
        url: '/og-image.png', // now works because of metadataBase
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};
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
