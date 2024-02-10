import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from './../components/Navbar/Navbar';
import Providers from "@/app/StoreProvider";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlickFix - Stream, Explore, Enjoy',
  description: 'Dive into a world of movies with FlickFix. Discover a curated collection ranging from classics to the latest releases.',
}


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  return (

      <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Navbar/>{children}<Footer/>
      </Providers>
      </body>
      </html>
  )
}
