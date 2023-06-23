import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'

export default function BigLink({
  head,
  title,
  linkTitle,
  to = '#',
}: React.PropsWithoutRef<{ head?: string; title?: string; linkTitle?: string; to?: string }>) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const linkTitleRef = useRef<HTMLHeadingElement>(null)
  const [hover, setHover] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-16">
      <h4 className="text-xs">{head}</h4>
      <Link
        to={to}
        className="flex flex-col items-center text-orange-600"
        onMouseOver={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <h1
          ref={titleRef}
          className={`my-2 text-base uppercase tracking-tighter [transition:0.5s] sm:text-xl md:my-6 md:text-4xl lg:text-6xl ${
            hover ? 'text-orange-400' : 'text-white'
          }`}
        >
          {title}
        </h1>
        <h3 ref={linkTitleRef} className={`flex flex-col items-center font-bold max-md:text-xs `}>
          {linkTitle}
          <div
            className={`h-[2px]  [transition:0.5s] md:h-1 ${
              hover ? 'w-[125%] bg-orange-600' : 'w-full bg-white'
            }`}
          ></div>
        </h3>
      </Link>
    </div>
  )
}
