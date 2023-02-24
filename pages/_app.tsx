import type { AppProps } from "next/app"
import dynamic from "next/dynamic"
import { useState } from "react"

import { CssBaseline, GeistProvider } from "@geist-ui/core"
import { Inter } from "@next/font/google"

import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })
const PageHeader = dynamic(() => import("@/components/Page/PageHeader"), {
  ssr: false,
})
const PageFooter = dynamic(() => import("@/components/Page/PageFooter"), {
  ssr: false,
})
const App = ({ Component, pageProps }: AppProps) => {
  const [themeType] = useState("dark")

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <PageHeader />
      <Component className={inter.className} {...pageProps} />
      <PageFooter />
    </GeistProvider>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
