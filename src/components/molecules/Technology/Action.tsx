import React from 'react'

import Container from '../../atoms/Container'

export default function Action({ data, ind }: React.PropsWithoutRef<{ data: any; ind: number }>) {
  return (
    <Container
      className={`grid-cols-1 gap-10 sm:grid-cols-2 ${
        ind % 2 == 0 ? 'lg:grid-cols-[2fr_1fr]' : 'lg:grid-cols-[1fr_2fr]'
      } grid py-4 md:py-10`}
    >
      <div className={` ${ind % 2 && 'sm:order-2'}`}>
        <img className="w-full" src={data.img}></img>
        <h3 className="w-[80%] pt-4 text-xs text-[#919191] md:pt-10">{data.imgDetail}</h3>
      </div>
      <div className={`lg:mx-[10%] ${!(ind % 2) && 'order-2'}`}>
        {data.subHeadings?.map((e: any, ind: number) => {
          return (
            <div key={ind}>
              <h2 className="text-lg uppercase md:text-2xl">{e.title}</h2>
              <p className="pt-1 pb-6 text-xs font-extralight  text-[#919191] md:text-sm">
                {e.body}
              </p>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
