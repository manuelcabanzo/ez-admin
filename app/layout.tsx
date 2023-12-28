import { ClerkProvider } from '@clerk/nextjs'
import { Wix_Madefor_Display } from 'next/font/google'

import { ModalProvider } from '@/providers/modal-provider'
import { ToastProvider } from '@/providers/toast-provider'

import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

const font = Wix_Madefor_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'E-Commerce Dashboard',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              <ToastProvider />
              <ModalProvider />
              {children}
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}