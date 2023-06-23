import React from 'react'

import Container from '../../atoms/Container'
import HoverLink from '../../atoms/HoverLink'
import Wrapper from '../../atoms/Wrapper'

export default function StrongTeam({ data }: React.PropsWithoutRef<{ data: any }>) {
  return (
    <Wrapper>
      <Container className="grid gap-10 pt-6 pb-3 md:grid-cols-2 md:pt-12">
        <div className="flex flex-col justify-between">
          <h2 className=" text-sm font-black tracking-normal text-slate-900 sm:text-lg md:text-3xl">
            {data.heading}
          </h2>
          <HoverLink to={data.link.to} name={data.link.name} />
        </div>
        <div className="flex flex-col gap-3 md:gap-y-7 ">
          <h4 className="text-xs text-slate-900 md:text-lg">{data.title}</h4>
          <h5 className="text-xs font-light text-slate-900 opacity-75 md:text-sm">{data.body}</h5>
        </div>
      </Container>
    </Wrapper>
  )
}
