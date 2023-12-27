import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextUIProviderCustom from "@/providers/next-ui-provider"
import { Headers } from '@/components/Headers/Headers'
import { NextAuthProvider } from '@/providers/next-auth-provider'
import Footer from '@/components/Footer/Footer'
import ToastProvider from '@/providers/toast-provider'

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
  session: any
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session} >
          <NextUIProviderCustom>
            <ToastProvider>
              <Headers />
              {children}
              <Footer />
            </ToastProvider>
          </NextUIProviderCustom>
        </NextAuthProvider>
      </body>
    </html>
  )
}
