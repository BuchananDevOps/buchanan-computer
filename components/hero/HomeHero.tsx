import Link from "next/link"
import { FC } from "react"

const HomeHero: FC = () => {
  return (
    <div className=" overflow-hidden px-4 sm:px-6 md:px-8  bg-slate-50">
      <div className="relative max-w-5xl mx-auto py-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Grow your business rapidly with the best seo and web design.
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          We&apos;re the go-to web design company, specializing in{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            custom websites
          </code>
          ,{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            e-commerce web design
          </code>
          ,{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            seo
          </code>{" "}
          and{" "}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            maintenance
          </code>{" "}
          . We code with an emphasis on performance and structured data.
        </p>
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <Link
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
            href="/contact"
          >
            Schedule Consultation
          </Link>
          <Link
            className="bg-slate-50 text-black ring-1 ring-slate-300 hover:bg-slate-200 focus:outline-none focus:ring-1 focus:ring-slate-400  font-semibold h-12 px-6 rounded-lg hidden sm:flex items-center justify-center sm:w-auto"
            href="/showcase"
          >
            <span>
              Browse Our Work{" "}
              <span className="hidden sm:inline">Portfolio</span>{" "}
              <span aria-hidden="true" className="text-black/25 sm:inline">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
