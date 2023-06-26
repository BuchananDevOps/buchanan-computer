import Link from "next/link"
import { FC, useState } from "react"

import clsx from "clsx"
import { motion } from "framer-motion"

import { FadeIn } from "./FadeIn"
import EcommcerceDev from "./logos/EcommerceDev"
import Maintenance from "./logos/Maintenance"
import Seo from "./logos/Seo"
import WebsiteDesign from "./logos/WebsiteDesign"

const variants = {
  hidden: { opacity: 0 },
  active: { opacity: 1 },
}

type Props = {
  href: string
  icon: React.ElementType
  title: "website-design" | "e-commerce-web-design" | "seo" | "maintenance"
  className?: string
  children: React.ReactNode
}

const ServiceCard: FC<Props> = ({
  href,
  title,
  icon: Icon,
  className,
  children,
}) => {
  const [hovering, setHovering] = useState(false)
  return (
    <Link
      className={clsx(
        "counter-border w-[calc(100%_-_0px)] h-[304]px sm:!w-[488px] sm:h-[352px]",
        {}
      )}
      href={href}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.i
        animate={hovering ? "active" : "hidden"}
        aria-hidden="true"
        initial="hidden"
        variants={variants}
      />
      <div
        className={clsx(
          "relative w-full h-full max-w-full !pb-12 pt-8 md:!pb-4 md:!pt-4 p-3 rounded-xl overflow-hidden flex flex-col items-center justify-center border border-[rgba(255,255,255,0.05)]",
          className
        )}
      >
        <div className="flex items-center justify-center flex-1 mb-7 md:mb-0">
          <Icon />
        </div>
        <div className="flex flex-col items-center flex-1 justify-center">
          {title == "website-design" ? (
            <h3 className="w-[300px] md:w-[320px] mb-3 uppercase font-bold text-white text-center">
              Web Design
            </h3>
          ) : title === "e-commerce-web-design" ? (
            <h3 className="w-[300px] md:w-[320px] mb-3 uppercase font-bold text-white text-center">
              E-Commcerce Web Design
            </h3>
          ) : title == "seo" ? (
            <h3 className="w-[300px] md:w-[320px] mb-3 uppercase font-bold text-white text-center">
              Search Engine Optimization
            </h3>
          ) : title == "maintenance" ? (
            <h3 className="w-[300px] md:w-[320px] mb-3 uppercase font-bold text-white text-center">
              Maintenance
            </h3>
          ) : null}
          {children}
        </div>
      </div>
    </Link>
  )
}

const ServiceCards: FC = () => {
  return (
    <div className=" relative flex flex-col lg:flex-row lg:flex-wrap items-center justify-center w-full h-full  overflow-hidden [--gradient-stop-1:0px] [--gradient-stop-2:120px] sm:[--gradient-stop-1:0px] sm:[--gradient-stop-2:120px]">
      <FadeIn delay={0.1}>
        <ServiceCard
          className="websiteDesignCardBg"
          href="/services/website-design"
          icon={WebsiteDesign}
          title="website-design"
        >
          <p className="text-lg !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70">
            High-performance build system for JavaScript and TypeScript
            codebases.
          </p>
        </ServiceCard>
      </FadeIn>
      <FadeIn delay={0.2}>
        <ServiceCard
          className="ecommerceCardBg"
          href="/services/e-commerce-web-design"
          icon={EcommcerceDev}
          title="e-commerce-web-design"
        >
          <p className="text-lg !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70 ">
            Introducing the Rust-powered successor to Webpack.
          </p>
        </ServiceCard>
      </FadeIn>
      <FadeIn delay={0.1}>
        <ServiceCard
          className="ecommerceCardBg"
          href="/services/seo"
          icon={Seo}
          title="seo"
        >
          <p className="text-lg !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70">
            High-performance build system for JavaScript and TypeScript
            codebases.
          </p>
        </ServiceCard>
      </FadeIn>
      <FadeIn delay={0.2}>
        <ServiceCard
          className="ecommerceCardBg"
          href="/services/maintenance"
          icon={Maintenance}
          title="maintenance"
        >
          <p className="text-lg !w-[280px] md:!w-[340px] font-space-grotesk text-center opacity-50 dark:opacity-70 ">
            Introducing the Rust-powered successor to Webpack.
          </p>
        </ServiceCard>
      </FadeIn>
    </div>
  )
}

export default ServiceCards
