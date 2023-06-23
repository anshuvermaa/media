import React, { useState } from 'react'
import { Link } from 'gatsby'

import HoverLink from '../atoms/HoverLink'
import Wrapper from '../atoms/Wrapper'
import ImgTextDiv from '../molecules/ImgTextDiv'

export default function TextDivSection({
  data,
  className,
  type,
  imgClassName,
}: React.PropsWithoutRef<{
  data: any
  className?: string
  type: string
  imgClassName?: string
}>) {
  return (
    <div className="flex flex-col gap-4 py-4">
      {data?.map((e: any, ind: number) => {
        console.log(e.img)
        return (
          <ImgTextDiv
            id={e.title.replace(' ', '')}
            key={e.title}
            src={e.img}
            side={ind % 2 == 1 ? 'left' : 'right'}
            className={imgClassName}
          >
            {type == 'link' && (
              <>
                <div className="flex flex-col gap-5  py-10 md:gap-10">
                  <Link to={e.link || '#'} className="cursor-pointer ">
                    <h2 className="text-3xl text-slate-900 hover:text-orange-500 md:text-5xl">
                      {e.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-slate-900 md:text-base">{e.body}</p>
                </div>
              </>
            )}
            {type == 'points' && (
              <>
                <div className="flex flex-col   py-10 ">
                  <h2 className="text-2xl text-slate-900">{e.title}</h2>
                  <div>
                    <h6 className="my-5 text-sm font-light text-slate-900">{e.body}</h6>
                    <ul className="ml-3 list-disc">
                      {e.points?.map((e: any, ind: number) => {
                        return (
                          <li
                            key={'point' + (ind + 1)}
                            className="my-3 text-sm font-light text-slate-900"
                          >
                            {e}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </>
            )}
            {type == 'para' && (
              <div id={e.id} className="flex flex-col justify-between">
                <h2 className="text-sm text-slate-900 md:text-lg lg:text-2xl 2xl:text-4xl">
                  {e.heading}
                </h2>
                <h6 className="pt-4 text-xs font-semibold text-slate-900 lg:text-base xl:pt-6 2xl:text-base">
                  {e.title}
                </h6>
                <p className="pt-3 pb-6 text-xs font-light text-slate-900 lg:pt-4 2xl:text-sm">
                  {e.body}
                </p>
                {/* <Link
                  to={e.to}
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <h4 className="relative pt-2 text-black underline decoration-orange-500 underline-offset-[15px] hover:text-orange-500">
                    {e.linkTitle}
                    <div
                      className={`h-[2px] w-full bg-orange-500 [transition:0.25s] ${
                        hover && 'w-[125%]'
                      }`}
                    ></div>
                  </h4>
                </Link> */}
                <HoverLink to={e.to} name={e.linkTitle} />
              </div>
            )}
          </ImgTextDiv>
        )
      })}
    </div>
  )
}
