import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Headers } from '@/components/Headers/Headers'
import { NextAuthProvider } from './next-auth-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MT GOLD',
  description: 'Project for MT Gold',
}

export default function RootLayout({
  children,
  session 
}: {
  children: React.ReactNode
  session : any
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session} >
          <Providers>
            <Headers/>
            {children}
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  )
}
