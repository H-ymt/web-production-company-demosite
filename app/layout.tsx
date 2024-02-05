import { Inter } from "next/font/google"
import Header from "@/components/Header"
import type { Metadata } from "next"
import "./styles/globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("localhost:3000"),
  title: {
    template: "%s | Next.js Website",
    default: "Next.js Website",
  },
  description: " A web production company specializing in Jamstack",
  twitter: {
    title: "Next.js Website",
    description: " A web production company specializing in Jamstack",
    card: "summary",
  },
  robots: {
    index: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
