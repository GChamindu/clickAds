import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MobileNavbar from "@/components/mobile-navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Interactive Media Experience",
  description: "Explore our interactive media experience",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-[100dvh]">
            <div className="flex-1">{children}</div>
            <MobileNavbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
