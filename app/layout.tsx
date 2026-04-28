import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "EcoTrack - Sustainability Tracker",
  description: "Track and reduce your carbon footprint",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
