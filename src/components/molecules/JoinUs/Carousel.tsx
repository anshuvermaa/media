import React, { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import SideBluredImage from '../../atoms/SideBluredImage'

export default function Carousel({
  data,
  title,
}: React.PropsWithoutRef<{ data: any; title: string }>) {
  const [selectedQues, setSelectedQues] = useState(1)
  const moveContentDiv = (side: string) => {
    if (side == 'left') {
      if (selectedQues != 1) {
        setSelectedQues(selectedQues - 1)
      }
    } else {
      if (selectedQues != data.length - 1) {
        setSelectedQues(selectedQues + 1)
      }
    }
  }
  return (
    <>
      <h2 className="flex w-full justify-between pb-3 text-lg md:py-8 md:text-2xl">
        {title}
        <span className="hidden md:flex">
          <HiChevronLeft
            className="leftArrow"
            size={65}
            onClick={() => {
              moveContentDiv('left')
            }}
          />
          <HiChevronRight
            className="rightArrow"
            size={65}
            onClick={() => {
              moveContentDiv('right')
            }}
          />
        </span>
      </h2>

      <div className="relative h-fit w-full md:w-[40%]">
        <div
          className="relative flex flex-col transition md:grid"
          style={{
            gridTemplateColumns: `repeat(${data.length} ,100%)`,
            left: -(selectedQues - 1) * 100 + '%',
            transition: '0.5s',
          }}
        >
          {data?.map((e: any, index: number) => {
            return (
              <div key={index} className="h-fit w-full ">
                <SideBluredImage
                  side="left"
                  src={e.img}
                  alt={e.title}
                  className="h-44 w-full lg:h-96"
                  shadeColor="rgb(17 24 39)"
                />
                <h3 className="mb-4 mt-6 text-xs md:text-sm lg:text-base">{e.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
