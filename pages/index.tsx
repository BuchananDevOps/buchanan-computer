import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"

const IntroHero = dynamic(() => import("@/components/hero/IntroHero"))
const PartnerCTA = dynamic(() => import("@/components/cta/PartnerCTA"))
const BestPractices = dynamic(() => import("@/components/cta/BestPractices"))

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          key="description"
          content="We're the go-to web design company, specializing in custom websites, e-commerce web design, seo and maintenance . We code with an emphasis on performance and structured data."
          name="description"
        />
        <meta
          key="twitter:title"
          content="Grow your business rapidly with a modern website."
          name="twitter:title"
        />
        <meta
          key="og:title"
          content="Grow your business rapidly with a modern website."
          property="og:title"
        />
        <title>Grow your business rapidly with a modern website.</title>
      </Head>
      <IntroHero />
      <PartnerCTA heading="Trusted by the best." page="home" />
      <BestPractices />
    </>
  )
}

export default Home
