import { NextPage } from "next"
import dynamic from "next/dynamic"

import { WEB_APP_FEATURES, WEB_FEATURES, WEB_UI_FEATURES } from "@/lib/features"
import { WEB_DESIGN_BENEFITS, WEB_DESIGN_PROCESS } from "@/lib/webServices"

const Heading = dynamic(() => import("@/components/page/Heading"))
const Section = dynamic(() => import("@/components/page/Section"))
const WebHero = dynamic(() => import("@/components/hero/WebHero"))
const PartnerCTA = dynamic(() => import("@/components/PartnerCTA"))
const GridItem = dynamic(() => import("@/components/GridItem"))
const SectionComp = dynamic(() => import("@/components/page/SectionFlex"))
const Faq = dynamic(() => import("@/components/page/Faq"))
const PortfolioCta = dynamic(() => import("@/components/cta/PortfolioCta"))
const ContactForm = dynamic(() => import("@/components/form/ContactForm"))

const WebDesign: NextPage = () => {
  return (
    <>
      <WebHero />
      <PartnerCTA heading="Best in class web designer." page="website" />
      <SectionComp
        heading={"Professional Web Design"}
        height={371}
        id={"services"}
        image={"/content/google-stack.webp"}
        position={"left"}
        subHeading={
          "Build on a foundation of cutting edge, enterprise-grade technology."
        }
        width={498}
      >
        <p className="mt-4 space-y-6 text-slate-700  text-[16px]">
          We&apos;re focused on delivering an incredible experience for you
          during the development process. We&apos;ll simplfy the complex process
          and build the foundation of your business. We ensure device
          adaptability, mobile responsiveness, security, improved SEO, the best
          image optimization and a streamlined development process.
        </p>
        <p className="mt-4 space-y-6 text-slate-700  text-[16px]">
          Whether you&apos;re looking to redesign an existing website or develop
          a new one from scratch, our expertise will guide you through every
          step of the process. With 13 years of experience and after developing
          hundreds of websites, we&apos;re sure we&apos;ll deliver a product
          that meets your needs and exceeds expectations.
        </p>
      </SectionComp>
      <SectionComp
        heading="Websites"
        height={0}
        id="websites"
        image={"/content/badge-mobile-responsive.svg"}
        position={"right"}
        subHeading="We build kickass websites."
        width={0}
      >
        <p className="mt-4 space-y-6 text-slate-700  text-[16px]">
          Buchanan Computer is passionate about bringing your businesses
          information online or converting your existing monolithic, slow, and
          fundamentally outdated website into a fast, modern, results driven
          website.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-2">
          {WEB_FEATURES.map(item => (
            <GridItem
              key={item.name.replace(/\s+/g, "-").toLowerCase()}
              {...item}
            />
          ))}
        </div>
      </SectionComp>
      <SectionComp
        heading="UI & UX Design"
        height={0}
        id="ui-ux-design"
        image={"/content/badge-wire-frame.svg"}
        position={"left"}
        subHeading="We simplify user interations."
        width={0}
      >
        <p className="mt-4 space-y-6 text-slate-700  text-[16px]">
          The best websites depend on great design as the foundation for an
          outstanding user experience. Unique branding, thought out user flows,
          concise navigation structure and ease of use are mandatory for your
          success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-2">
          {WEB_UI_FEATURES.map(item => (
            <GridItem
              key={item.name.replace(/\s+/g, "-").toLowerCase()}
              {...item}
            />
          ))}
        </div>
      </SectionComp>
      <SectionComp
        heading="Web App Development"
        height={0}
        id="web-apps"
        image={"/content/badge-pwa.svg"}
        position={"right"}
        subHeading="We maximize customer engagement and conversions."
        width={0}
      >
        <p className="mt-4 space-y-6 text-slate-700  text-[16px]">
          Websites serve to inform, web apps serve to help. Web apps are far
          more complex than websites. If your project requires e-commerce,
          digital payments, user data or any complex user interaction,
          developing a web app is essential.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-2">
          {WEB_APP_FEATURES.map(item => (
            <GridItem
              key={item.name.replace(/\s+/g, "-").toLowerCase()}
              {...item}
            />
          ))}
        </div>
      </SectionComp>
      <PortfolioCta />
      <SectionComp
        heading="Why design and develop a website?"
        height={0}
        id=""
        image={"/content/google-analytics-chart.svg"}
        position={"right"}
        subHeading="Increase your online presence."
        width={0}
      >
        <p className="mt-4 space-y-6 text-slate-700  text-[16px]">
          With thoughtful planning and consideration, we&apos;ll create a site
          that will successfully produce incredible results – whether focused on
          sales, leads or engagement with customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
          {WEB_DESIGN_BENEFITS.map(item => (
            <GridItem key={item.name} {...item} />
          ))}
        </div>
      </SectionComp>
      <SectionComp
        heading={"Web Design Process"}
        height={0}
        id={"web-design-process"}
        image={"/content/badge-desktop-wire-frame.svg"}
        position={"left"}
        subHeading={"Easy web design process."}
        width={0}
      >
        <p className="mt-4 space-y-6 text-slate-700  text-[16px]">
          Let Buchanan Computer&apos;s expertise guide your web design project
          to create an engaging website that will lead to increased conversions.
          We build each website from scratch which allows us to design with
          intent for each brand and portray their message how they see fit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
          {WEB_DESIGN_PROCESS.map(item => (
            <GridItem key={item.name} {...item} />
          ))}
        </div>
      </SectionComp>
      <Faq
        heading={"Frequently asked Web Design questions"}
        id={"web-faq"}
        subHeading={"Everything you need to know"}
        type="web"
      />
      <Section id={"web-design-contact"}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0">
          <div className="lg:col-span-5">
            <Heading
              description={
                "We value our client relationship and your success as much as our own. We take the time to research and understand your business. We use our expertise to create engaging experiences for your customers that not only looks good but also drive audiences to action, helping you reach and exceed your business goals."
              }
              heading={"Get In Touch"}
              subHeading={"Your success is our success."}
            />
          </div>
          <div className="-mb-4 lg:col-span-8 xl:col-span-7 xl:col-start-6">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}

export default WebDesign
