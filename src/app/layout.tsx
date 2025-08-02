import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const BoneLock = localFont({
  src: "./fonts/BoneLockRegular.ttf",
  variable: "--font-bone-lock",
})

export const metadata: Metadata = {
  title: "Psyground",
  description: "Conheça a Psyground",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${BoneLock.variable} font-sans`}>{children}</body>
    </html>
  )
}
