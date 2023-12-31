import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarLayout from '@components/Navbar/Navbar.layout'
import ProviderLayout from 'redux/Provider.layout'
import { MiddleWareLogin } from 'middlewares/Login.middleware'
import ApolloProviderLayout from 'data/Apolo.layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social Media Timeline',
  description: 'This is a social media timeline to like and dislike ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 `}>
        <ApolloProviderLayout>
          <ProviderLayout>
            <MiddleWareLogin />
            <NavbarLayout />
            <div className='py-8 max-w-3xl mx-auto'>
              {children}
            </div>
          </ProviderLayout>
        </ApolloProviderLayout>
      </body>
    </html>
  )
}
