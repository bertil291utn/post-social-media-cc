import Navbar from '@components/Navbar.component'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Posts',
  description: 'This is a post using x,y,z',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 `}>
        <Navbar />
        <div className='py-8 max-w-3xl mx-auto'>
          {children}
        </div>

      </body>
    </html>
  )
}
