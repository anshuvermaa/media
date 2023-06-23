import React from 'react'

import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'

export default function PridePoints({ data }: React.PropsWithoutRef<{ data: any }>) {
  return (
    <Wrapper>
      <Container className="grid gap-10 py-6 md:grid-cols-2 md:py-12">
        <div>
          <h2 className=" text-sm font-black tracking-normal text-slate-900 sm:text-lg md:text-3xl">
            {data.heading}
          </h2>
          <ul className=" flex flex-col gap-y-2 pl-6 pt-3 md:gap-y-4 md:pt-10 ">
            {data.points?.map((e: any, ind: number) => {
              return (
                <li className="list-disc text-xs text-slate-900 md:text-base" key={ind}>
                  {e}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:gap-y-7 lg:mx-[10%]">
          <h4 className="text-xs text-slate-900 md:text-lg">{data.title}</h4>
          <h5 className="text-xs font-light text-slate-900 md:text-sm">{data.body}</h5>
        </div>
      </Container>
    </Wrapper>
  )
}
