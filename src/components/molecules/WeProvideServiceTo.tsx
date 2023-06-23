import React from 'react'

import Container from '../atoms/Container'
import Hr from '../atoms/Hr'
import Wrapper from '../atoms/Wrapper'

export default function WeProvideServiceTo({
  data,
  className = '',
  color,
}: React.PropsWithoutRef<{
  data: any
  className: string
  color?: string
}>) {
  return (
    <Wrapper className={` ${className}`}>
      <Container className="flex flex-col gap-10 py-10">
        {data.preDetails && (
          <>
            <div className="md:mx-[15%]">
              <h2 className="text-2xl sm:text-3xl md:text-5xl">{data.preDetails.title}</h2>
              <div className="divide-y-[1px] divide-solid divide-white">
                {data.preDetails.subheadings?.map((e: any, ind: number) => {
                  return (
                    <>
                      <div className="py-2 md:py-10">
                        <h2 className="mb-3 text-base text-inherit sm:text-lg md:text-2xl">
                          {e.title}
                        </h2>
                        <h6 className="font-light text-inherit opacity-75">{e.body}</h6>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </>
        )}
        <div className="flex flex-col gap-6">
          <div className=" flex w-full items-center justify-center gap-10">
            <Hr className="h-[2px] w-full" style={{ background: color }} />
            <p
              className="w-fit whitespace-nowrap text-center text-sm font-black italic tracking-tighter sm:text-lg lg:text-3xl"
              style={{ color: color }}
            >
              {data.mainHeading}
            </p>
            <Hr className="h-[2px] w-full" style={{ background: color }} />
          </div>
          <div className="flex w-full flex-nowrap items-center gap-3">
            {data.customers?.map((c: any, i: any) => {
              return (
                <div key={i} className="mx-auto flex h-fit max-h-16 w-auto justify-center">
                  <img src={c} alt={''} className="object-contain" />
                </div>
              )
            })}
          </div>
        </div>
        {data.subHeading1 && (
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <p className="text-center text-xl font-black italic tracking-tighter md:text-2xl">
                {data.subHeading1}
              </p>
              <div className=" flex items-center justify-center gap-12 max-sm:flex-col">
                {data.workedOnImages?.map((e: any, ind: any) => {
                  return (
                    <img
                      src={e}
                      key={ind}
                      className="w-[90%] max-w-[500px] bg-slate-400 sm:w-[45%]"
                    ></img>
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-center text-sm font-black italic tracking-tighter sm:text-2xl md:text-2xl">
                {data.subHeading2}
              </p>
              <div className=" grid grid-cols-1 gap-4 sm:mx-[10%] md:grid-cols-[1fr_2fr] md:gap-10">
                <img src={data.detailImage} className=" w-[100%] bg-slate-400"></img>
                <div className="">
                  <h4 className="mb-3 max-md:text-xs md:mb-5">{data.detailHeading}</h4>
                  <h6 className="text-xs font-light opacity-75 md:text-sm">{data.detailBody}</h6>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Wrapper>
  )
}
