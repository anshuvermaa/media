import React from 'react'
import { Link } from 'gatsby'

import Container from '../../atoms/Container'
import Hr from '../../atoms/Hr'
import SideBluredImage from '../../atoms/SideBluredImage'
import Wrapper from '../../atoms/Wrapper'

export default function Leadership({
  color,
  data,
  className,
}: React.PropsWithoutRef<{ color?: string; data?: any; className?: string }>) {
  return (
    <Wrapper className={className}>
      <Container className="">
        <div className="my-6 grid items-center gap-3 sm:grid-cols-3 md:my-12">
          <Hr className="h-[2px] max-sm:hidden" style={{ background: color }} />
          <p
            className="text-md text-center font-black italic tracking-tighter lg:text-3xl"
            style={{ color: color }}
          >
            {data.head}
          </p>
          <Hr className="h-[2px] max-sm:hidden" style={{ background: color }} />
        </div>
        <div className="grid h-[50rem] w-full grid-cols-1 py-4 md:grid-cols-2 md:py-12 lg:h-[60rem] xl:h-[30rem] xl:grid-cols-3">
          {data.leaders?.map((e: any, ind: number) => {
            return (
              <div key={ind}>
                <SideBluredImage
                  side="left"
                  src={e.img}
                  alt={e.name}
                  className="h-[80%] w-full"
                  shadeColor="rgb(17 24 39)"
                />
                <Link to={e.link} className="flex h-[20%] cursor-pointer flex-col justify-center">
                  <div className="text-base md:text-lg lg:text-2xl">{e.name}</div>
                  <h3 className="text-sm text-[#979797] md:text-sm lg:text-base">{e.position}</h3>
                </Link>
              </div>
            )
          })}
        </div>
      </Container>
    </Wrapper>
  )
}
