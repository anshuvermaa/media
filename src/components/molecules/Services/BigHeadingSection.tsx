import React from 'react'
import { useState } from 'react'

import Button from '../../atoms/Button'
import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'

export default function BigHeadingSection({ data }: React.PropsWithoutRef<{ data: any }>) {
  const [dropdown, setdropdown] = useState(0)
  return (
    <Wrapper className="bg-theme-black pt-10 md:pt-20">
      <Container className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] ">
        <div className="flex flex-col justify-between">
          <h2 className="text-3xl lg:text-5xl">{data.heading}</h2>
          <div>
            <p className="italic">{data.headingDetail}</p>
            <Button variant="activeLogin" className="rounded-full text-xs max-md:mb-10 md:text-sm">
              {data.headingBtn}
            </Button>
          </div>
        </div>
        <div className="sm:pl-[10%]">
          <h4 className="mb-5 text-xs sm:text-sm md:text-lg">{data.detailHeading}</h4>
          <h6 className="text-xs font-light opacity-75 md:text-sm">{data.detailBody}</h6>
        </div>
        <div className="my-10 grid grid-cols-3 gap-5 sm:col-span-2 sm:gap-5 md:my-20 md:grid-cols-6 lg:grid-cols-8">
          {data.detailImages?.map((e: any, ind: number) => {
            return (
              <img src={e} key={ind} alt="" className="w-[80%] self-center justify-self-center" />
            )
          })}
        </div>
        {data.extra && (
          <div className="col-span-full my-6 grid w-full grid-cols-1 gap-10 sm:my-12 md:grid-cols-[1fr_2fr]">
            <div>
              <h4 className="text-2xl italic text-white md:text-4xl">{data.extraData.title}</h4>
              <div className="mt-4 flex flex-col gap-y-2  md:mt-10">
                <h6 className="text-xs font-light text-[#A0A0A0] md:text-sm">
                  Here is the voice over demo example that Global Voices Media produced for the{' '}
                  <span className="text-white">EU parliament</span>, "DG GROW", undertaken in{' '}
                  <span className="text-white">24 different voices</span>.
                </h6>
                <h6 className="text-xs font-light text-[#A0A0A0] md:text-sm">
                  Just press the play button to listen in English, or{' '}
                  <span className="text-white">select any language below</span>:
                </h6>
              </div>
              <select
                name="language"
                className="mt-5 w-full rounded-lg border border-white bg-transparent px-4 py-2 md:mt-10"
                id="langSelector"
                onChange={(e) => {
                  setdropdown(parseInt(e.target.value))
                }}
              >
                {data.extraData.languages?.map((e: any, ind: number) => {
                  return (
                    <option key={`opt-${ind + 1}`} value={ind}>
                      {e.name}
                    </option>
                  )
                })}
                {/* <option value="" className="bg-black text-black" color="#000000"></option> */}
              </select>
            </div>
            <div className="w-full">
              <div className="flex aspect-video items-center justify-center overflow-hidden">
                <video
                  src={data.extraData.languages[dropdown].imgUrl.link}
                  autoPlay
                  controls={true}
                  placeholder="blurred"
                  className=" w-full "
                />
              </div>

              <h4 className="mt-10 w-full text-center text-[#A0A0A0]">
                {data.extraData.languages[dropdown].imgTitle}
              </h4>
            </div>
          </div>
        )}
      </Container>
    </Wrapper>
  )
}
