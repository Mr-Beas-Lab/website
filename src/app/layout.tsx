import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mr. Beas - AI Agent and Expert Trading on Telegram',
  description: 'Mr. Beas is an innovative Telegram mini app designed to transform trading, powered by AI and expert strategies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-lg`}>{children}</body>
    </html>
  )
}

