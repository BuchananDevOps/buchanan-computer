import { useRouter } from "next/router"
import type { FC } from "react"

import contact_page from "@/data/contact_page.json"
import creative_work from "@/data/creative_work.json"
import data_schema from "@/data/data_schema.json"
import local_business from "@/data/local_business.json"
import seo_service from "@/data/seo_service.json"
import web_service from "@/data/web_service.json"
import { gtagUrl, renderSnippet } from "@/lib/analytics"

import seoFaq from "../seoFaq.json"
import webFaq from "../webFaq.json"
import SEO from "./Seo"

function getType() {
  const pathname = useRouter().pathname
  switch (pathname) {
    case "/":
      return { local_business }
    case "/seo":
      return { seo_service }
    case "/web-design":
      return { web_service }
    case "/showcase":
      return { creative_work }
    case "/contact":
      return { contact_page }
    default:
      return { data_schema }
  }
}

function getFaq() {
  const pathname = useRouter().pathname
  switch (pathname) {
    case "/seo":
      return { seoFaq }
    case "/web-design":
      return { webFaq }
    default:
      return
  }
}

const Head: FC = () => {
  const type = getType()
  const faqSchema = getFaq()
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(type) }}
      />
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script async src={gtagUrl} />
      <script dangerouslySetInnerHTML={{ __html: renderSnippet() as string }} />
    </SEO>
  )
}

export default Head
