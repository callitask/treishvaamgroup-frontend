import type { Metadata } from "next"
import { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Treishvaam Group",
  description: "Treishvaam Group - Business Excellence",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
