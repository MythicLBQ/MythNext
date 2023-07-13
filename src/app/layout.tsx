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
        <meta name="language" content="English"/>
        <link href="https://fonts.cdnfonts.com/css/george-iv" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/wide-latin" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/dalek-pinpoint" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Sofia&effect=fire" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/battenberg-and-custard" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/road-rage" rel="stylesheet"/>
      <body className={inter.className}>{children}</body>
      <FooterComponent></FooterComponent>
    </main>
  )
}