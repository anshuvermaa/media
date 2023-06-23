import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Container from '../../atoms/Container'
import Hr from '../../atoms/Hr'
import Wrapper from '../../atoms/Wrapper'

export default function OtherLocations({ data }: React.PropsWithoutRef<{ data: any }>) {
  return (
    <Wrapper className="bg-theme-black">
      <Container className="py-12">
        <div className="my-12 flex items-center gap-3 sm:grid-cols-3">
          <Hr className="h-[2px] w-full" />
          <p className="w-fit whitespace-nowrap text-center text-sm font-black italic tracking-tighter sm:text-lg lg:text-3xl">
            {data.head}
          </p>
          <Hr className="h-[2px] w-full" />
        </div>
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data.cities?.map((e: any, ind: number) => (
            <div key={ind} className="w-full">
              <img src={e.img} alt={e.city} className="h-52 w-full" />
              <div className="flex flex-col items-center">
                <h2 className="my-4 text-2xl uppercase">{e.city}</h2>
                <div className="flex flex-col items-center">
                  <h6 className="">{e.number}</h6>
                  <h6 className="">{e.email}</h6>
                </div>
              </div>
              {/* hello */}
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}
