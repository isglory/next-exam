'use client'

import './globals.css'
import Header from './header'
import Footer from './footer'
import { Providers } from './provider'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers className="flex flex-col items-center justify-center px-5 min-h-screen">
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
