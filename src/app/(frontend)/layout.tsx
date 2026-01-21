import type { ReactNode } from 'react'
import { Roboto, Roboto_Condensed } from 'next/font/google'
import { cn } from '@/lib/utils'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import '@/styles/globals.css'

type Props = {
  children: ReactNode
}

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
})

export const metadata = {
  description: {
    default: 'Webseite description',
  },
  title: {
    default: 'Website template',
    template: '%s | Website template',
  },
  authors: [{ name: 'Andreas Remdt', url: 'https://andreasremdt.com' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
}

export default function Layout({ children }: Props) {
  return (
    <html
      lang="en"
      className={cn(roboto.variable, robotoCondensed.variable, 'antialiased text-neutral-700')}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
