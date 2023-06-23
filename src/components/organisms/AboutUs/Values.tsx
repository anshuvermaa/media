import React from 'react'

import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'

export default function Values({
  className,
  data,
  color,
}: React.PropsWithoutRef<{ className?: string; data: any; color: string }>) {
  return (
    <Wrapper
      className={className}
      // style={{
      //   backgroundImage: `url(${data.bgImg})`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      // }}
    >
      <div className="backdrop-blur-lg">
        <Container className=" py-4 md:py-8 xl:px-[0]">
          <h2
            className={`pb-2 text-sm font-bold sm:text-base md:pb-12 md:text-center md:text-xl xl:text-3xl ${color}`}
          >
            {data.head}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_3fr] md:gap-10">
            <div className="flex justify-center">
              <div className="flex flex-col gap-y-4  md:gap-y-16">
                {data.keyPoints?.map((e: any, ind: number) => (
                  <h3 className={`max-sm:text-xs md:font-semibold ${color}`} key={ind}>
                    {e}
                  </h3>
                ))}
              </div>
            </div>
            <div>
              <h3 className={`pb-3 text-sm font-medium md:pb-10 xl:text-xl ${color}`}>
                {data.title}
              </h3>
              <p className={`text-xs  font-light opacity-75 md:text-base ${color}`}>{data.body}</p>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  )
}
