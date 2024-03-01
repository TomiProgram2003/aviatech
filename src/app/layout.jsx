import { Inter } from "next/font/google";
import { Orbitron } from "next/font/google";
import localfont from 'next/font/local'

import "./globals.css";

import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

const stencil = localfont({
  src: [{
    path: '../../public/fonts/AreaStencil.ttf',
    weight: 'bold'
  }],
  variable: '--font-stencil'
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-orbitron'
})

export const metadata = {
  title: "AVIA TECH",
  description: "AVIA TECH WEBSITE",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ inter.className } ${ stencil.variable } ${ orbitron.variable }`}>
        <Navbar />
        { children }
        <Footer />
      </body>
    </html>
  );
}
