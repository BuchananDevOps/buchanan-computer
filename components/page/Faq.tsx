import { FC } from "react"

import seoFaq from "@/data/seoFaq.json"
import webFaq from "@/data/webFaq.json"

import FaqItem from "./FaqItem"
import Heading from "./Heading"
import Section from "./Section"

type Props = {
  id: string
  heading: string
  subHeading: string
  type?: "seo" | "web"
  className?: string
}

const Faq: FC<Props> = ({ id, heading, subHeading, type, className }) => {
  return (
    <Section className={className} id={id}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0">
        <div className="lg:col-span-5">
          <Heading heading={heading} subHeading={subHeading} />
        </div>
        <div className="-mb-4 lg:col-span-8 xl:col-span-7 xl:col-start-6">
          {type === "seo"
            ? seoFaq.mainEntity.map(item => (
                <FaqItem
                  key={item.name}
                  name={item.name}
                  text={item.acceptedAnswer.text}
                />
              ))
            : webFaq.mainEntity.map(item => (
                <FaqItem
                  key={item.name}
                  name={item.name}
                  text={item.acceptedAnswer.text}
                />
              ))}
        </div>
      </div>
    </Section>
  )
}

export default Faq
