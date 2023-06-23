import React from 'react'

import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'

export default function BigHeadingSection({ data }: React.PropsWithoutRef<{ data: any }>) {
  return (
    <Wrapper className="bg-theme-black py-6 md:py-12">
      <Container className="">
        <div className="flex flex-col items-center gap-y-3 md:gap-y-8 lg:mx-[15%]">
          <h4 className="text-center text-sm italic md:text-lg">{data.title}</h4>
          {data.body?.map((e: any, ind: number) => {
            return (
              <h6 key={ind} className="text-center font-normal max-md:opacity-75">
                {e}
              </h6>
            )
          })}
        </div>
        <div className="col-span-2 mt-6 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-4 md:gap-10 xl:grid-cols-8">
          <img className="mx-auto h-24 w-full bg-slate-500" />
          <img className="mx-auto h-24 w-full bg-slate-500" />
          <img className="mx-auto h-24 w-full bg-slate-500" />
          <img className="mx-auto h-24 w-full bg-slate-500" />
          <img className="mx-auto h-24 w-full bg-slate-500" />
          <img className="mx-auto h-24 w-full bg-slate-500" />
          <img className="mx-auto h-24 w-full bg-slate-500" />
          <img className="mx-auto h-24 w-full bg-slate-500" />
        </div>
      </Container>
    </Wrapper>
  )
}
