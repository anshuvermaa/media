import React from 'react'

import Container from '../../atoms/Container'
import Hr from '../../atoms/Hr'
import Wrapper from '../../atoms/Wrapper'

export default function JoinCommunity({ data }: React.PropsWithoutRef<{ data: any }>) {
  return (
    <Wrapper className="bg-theme-black">
      <Container className="grid gap-10 py-12 sm:grid-cols-2">
        <div className="flex flex-col items-center gap-y-6">
          <h2 className="text-sm md:text-lg">{data.heading}</h2>
          <div className="relative flex h-[30vh] w-[30vh] flex-col justify-around rounded-full bg-white py-10 xl:h-[22vw] xl:w-[22vw]">
            <h3 className="flex flex-col italic">
              <span className="w-full text-center text-lg font-black text-black md:text-lg">
                Join Our
              </span>
              <span className="w-full text-center text-lg font-black text-black md:text-lg">
                Community
              </span>
            </h3>
            <h4 className="w-full text-center font-normal text-black">Translators</h4>
            <hr className="mx-auto h-[3px] w-[5vh] bg-orange-500" />
            <h4 className="w-full text-center font-normal text-black">Voice Actors</h4>
            <hr className="mx-auto h-[3px] w-[5vh] bg-orange-500" />
            <h4 className="w-full text-center font-normal text-black">Dubbing Studios</h4>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          {data.body?.map((e: any, ind: number) => (
            <p key={ind} className="text-sm font-extralight text-[#A0A0A0] ">
              {e}
            </p>
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}
