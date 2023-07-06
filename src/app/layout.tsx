import "../styles/styles.css";
import "../styles/bootstrap.css";
import "../styles/modesta.css";

import { Inter } from 'next/font/google'

import FooterComponent from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Home Of MythicXGN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main lang="en">
      <body className={inter.className}>{children}</body>
      <FooterComponent></FooterComponent>
    </main>
  )
}