import React from 'react'

import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'

export default function BigHeadingSection({ data }: React.PropsWithoutRef<{ data: any }>) {
  return (
    <Wrapper className="py-5 md:py-10">
      <Container className="">
        <div className="flex flex-col gap-y-4 md:mx-[15%] md:gap-y-8">
          <h4 className="italic text-slate-900 max-sm:text-xs">{data.title}</h4>
          <h6 className="font-normal text-slate-900 opacity-75 max-sm:text-xs">{data.body}</h6>
        </div>
      </Container>
    </Wrapper>
  )
}
