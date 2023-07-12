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
      <meta httpEquiv="content-type" content="text/html; charset=ISO-8859-1"/>
      <meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0;  user-scalable=0;" name="viewport"/>
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