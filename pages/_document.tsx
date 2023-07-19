import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import Script from "next/script"

import clsx from "clsx"

import { gtagUrl, renderSnippet } from "@/lib/analytics"

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        lang="en"
        itemType="http://schema.org/WebPage"
        className=" [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]"
      >
        <Head>
          <Script async src={gtagUrl} />
          <Script
            dangerouslySetInnerHTML={{ __html: renderSnippet() as string }}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={"/apple-touch-icon.png"}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={"/favicon-32x32.png"}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={"/favicon-16x16.png"}
          />
          <link rel="manifest" href={"/site.webmanifest"} />
          <link
            rel="mask-icon"
            href={"/safari-pinned-tab.svg"}
            color="#38bdf8"
          />
          <link rel="shortcut icon" href={"/favicon.ico"} />
          <meta name="apple-mobile-web-app-title" content="Buchanan Computer" />
          <meta name="application-name" content="Buchanan Computer" />
          <meta name="msapplication-TileColor" content="#38bdf8" />
          <meta name="msapplication-config" content={"/browserconfig.xml"} />
          <meta name="theme-color" content="#f8fafc" />
        </Head>
        <body className={clsx("antialiased text-slate-400")}>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}
