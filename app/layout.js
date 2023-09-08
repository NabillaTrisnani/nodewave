import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Nodewave - Make Your Own Website and Mobile Application',
  description: 'Create Mobile Applications and Websites for Companies or Your Business Have a transparent pricing, easy and straightforward development process',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
