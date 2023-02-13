import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component className={inter.className} {...pageProps} />
    </GeistProvider>
  ) 
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})

