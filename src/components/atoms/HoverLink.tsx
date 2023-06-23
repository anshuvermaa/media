import React, { useState } from 'react'
import { Link } from 'gatsby'

export default function HoverLink({ to, name }: { to: string; name: string }) {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <Link to={to} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <h4 className="relative w-fit text-xs text-slate-900 hover:text-orange-500 sm:text-base md:text-xl">
        {name}
        <div
          className={`h-[2px] w-full bg-orange-500 [transition:0.25s] ${hover && 'w-[105%]'}`}
        ></div>
      </h4>
    </Link>
  )
}
