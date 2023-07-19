import { useRouter } from "next/router"
import type { FC } from "react"

import data_schema from "@/data/data_schema.json"
import { gtagUrl, renderSnippet } from "@/lib/analytics"

import seoFaq from "../seoFaq.json"
import webFaq from "../webFaq.json"
import SEO from "./Seo"

function getSchema() {
  const pathname = useRouter().pathname
  switch (pathname) {
    case "/seo":
      return { data_schema, seoFaq }
    case "/web-design":
      return { data_schema, webFaq }
    case "/showcase":
      return { data_schema }
    default:
      return data_schema
  }
}

const Head: FC = () => {
  const schema = getSchema()
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script async src={gtagUrl} />
      <script dangerouslySetInnerHTML={{ __html: renderSnippet() as string }} />
    </SEO>
  )
}

export default Head
