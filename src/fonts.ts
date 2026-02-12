/* Centralized font imports using next/font

- Newsreader via Google (serif)
- Inter used as a high-quality substitute for Geist Sans (sans)
- JetBrains Mono used as a modern monospace substitute for Geist Mono

Replace `inter`/`jetbrainsMono` with local Geist fonts if you have licensed font files.
*/

import { Newsreader } from 'next/font/google'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'

export const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '600', '700'],
})

// Inter is used here as a high-quality sans substitute for Geist Sans.
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
})

// Local Geist sample placeholder (optional):
// If you obtain Geist Sans / Geist Mono files, drop them in `public/fonts` and uncomment below.
/*
export const geistSans = localFont({
  src: [
    { path: '../public/fonts/GeistSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/GeistSans-Medium.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
})
*/
