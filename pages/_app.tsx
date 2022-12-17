import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { BlockchainProvider } from '../contexts/BlockchainContext'

import '../css/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BlockchainProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </BlockchainProvider>
  )
}
