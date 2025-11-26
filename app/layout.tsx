import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aziz Rahman - Full-Stack Developer & AI Engineer",
  description:
    "Full-Stack Software Developer specializing in React, TypeScript, Node.js, and Applied AI. Open for internship and co-op opportunities.",
  keywords: ["Full-Stack Developer", "React", "TypeScript", "Node.js", "AI Engineer", "Toronto"],
  authors: [{ name: "Aziz Rahman" }],
  openGraph: {
    title: "Aziz Rahman - Full-Stack Developer & AI Engineer",
    description: "Full-Stack Software Developer specializing in React, TypeScript, Node.js, and Applied AI",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
