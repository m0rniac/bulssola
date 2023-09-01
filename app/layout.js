import React from 'react';
import Script from 'next/script';
import { Inter } from 'next/font/google'

import Data from "./data.json";
import "../public/css/bootstrap.css";

import { NavBar } from './Navegation';
import Footer from "./Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | Christian Castro',
  description: "Home site from m0rniac (bulssola) portfolio",
  keywords: ["bulssola", "bulssola web", "bulssola github", "bulssola instagram", "bulssola telegram", "bulssola whatsapp", "bulssola github"],
  authors: [{ name: 'bulssola', url: "https:://bulssola.com" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
  creator: 'bulssola',
  publisher: 'bulssola',
  icons: {
      icon: Data.logo,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className='container-fluid mt-2'>
          <NavBar />
        </div>

        {children}
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity='sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe' crossOrigin='anonymous' />
      </body>
    </html>
  )
}
