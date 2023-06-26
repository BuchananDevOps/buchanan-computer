import Image from "next/image"
import { FC } from "react"

const Seo: FC = () => {
  return (
    <div className="relative w-24 h-24">
      <div className="pointer-events-none absolute w-[261px] h-[261px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FF3358] to-[#FF4FD8] mix-blend-normal opacity-5 dark:opacity-[0.15] blur-[60px]" />
      <div className="contents">
        <Image
          alt="Seo Logo"
          className="absolute w-[84px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          height={120}
          src={`/icons/searchcheck.svg`}
          width={120}
        />
      </div>
    </div>
  )
}

export default Seo