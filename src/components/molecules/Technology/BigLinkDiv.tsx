import React from 'react'
import { Link } from 'gatsby'

import Container from '../../atoms/Container'
import HoverLink from '../../atoms/HoverLink'

export default function BigLinkDiv({ data }: React.PropsWithoutRef<{ data: any }>) {
  return (
    <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
      <div>
        <h2 className="text-xl text-slate-900 md:text-4xl">{data.title}</h2>
        {data.body?.map((st: any, ind: number) => {
          return (
            <p key={ind} className="pt-3 text-xs text-slate-500 opacity-75 md:pt-5 ">
              {st}
            </p>
          )
        })}
        <div className="mt-4 md:mt-10 ">
          <HoverLink to={'#'} name={data.linkTitle} />
        </div>
      </div>
      <div
        className={`min-h-[30vh] w-full bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${data.img})` }}
      >
        {/* <img src={data.img} alt={data.linkTitle} className="" /> */}
      </div>
    </Container>
  )
}
