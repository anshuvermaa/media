import React from 'react'

import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'

import Carousel from './Carousel'

export default function Community({ data }: React.PropsWithoutRef<{ data: any }>) {
  return (
    <Wrapper className="overflow-x-hidden bg-theme-black py-8">
      <Container>
        <h2 className="py-4 text-sm sm:text-lg md:w-[90%] md:py-8 md:text-4xl">{data.heading}</h2>
        {data.body?.map((e: any, ind: number) => {
          return (
            <p
              className="w-[85%] font-light opacity-75 max-md:text-sm max-sm:text-xs md:w-[70%]"
              key={ind}
            >
              {e}
            </p>
          )
        })}
        <Carousel data={data.works} title={data.title} />
      </Container>
    </Wrapper>
  )
}
