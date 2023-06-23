import React, { useState } from 'react'
import { Link } from 'gatsby'
import { HiChevronDown } from 'react-icons/hi'

import Container from '../../atoms/Container'
import HoverLink from '../../atoms/HoverLink'
import Wrapper from '../../atoms/Wrapper'

export default function JobListing({ data }: React.PropsWithoutRef<{ data: any }>) {
  const [filtering, setFiltering] = useState(false)
  const [filter, setFilter] = useState(data.jobs)
  function handleFilter(query: string) {
    query = query.toLowerCase()
    if (!filtering || !query) {
      setFilter(data.jobs)
    } else {
      const temp: any[] = []
      data.jobs.map((e: any) => {
        if (e.title.toLowerCase().includes(query) || e.location.toLowerCase().includes(query)) {
          temp.push(e)
        }
      })
      setFilter(temp)
    }
  }
  return (
    <Wrapper className="bg-theme-black ">
      <Container className="grid gap-y-4 overflow-y-auto py-8 md:grid-cols-[1fr_3fr] md:gap-y-10 md:py-16">
        <div className="flex items-end justify-between md:col-start-2">
          <h2 className="text-xl font-semibold italic md:text-2xl lg:text-4xl">JOB LISTING</h2>
          <h4 className="text-sm italic text-[#A0A0A0] md:text-lg lg:text-2xl">
            {filter.length} Live Jobs
          </h4>
        </div>
        <div className="m-2 flex flex-col justify-start">
          <button
            className={`mb-2 flex h-8 w-min ${
              filtering ? 'px-5' : 'px-10'
            } items-center justify-around border-2 hover:border-orange-500 md:h-12`}
            onClick={(e) => {
              setFiltering(!filtering)
              handleFilter('')
            }}
          >
            {filtering ? 'X' : 'FILTER'}
          </button>
          {filtering && (
            <input
              type="text"
              onChange={(e) => handleFilter(e.target.value)}
              className="w-[80%] bg-transparent p-2 text-sm outline outline-1 focus:outline-orange-500"
              placeholder="Enter Search Text"
            />
          )}
        </div>
        <div className="container mx-auto ">
          <table className="w-full table-auto ">
            <thead>
              <tr>
                <th className="h-8 border-b-2 border-t-2 border-gray-400 px-4 py-2 text-left md:h-12 ">
                  <div className="sm:text-md  flex items-center text-sm font-semibold italic text-[#A0A0A0]">
                    JOB TITLE <HiChevronDown className="leftArrow ml-3" size={40} />
                  </div>
                </th>
                <th className="sm:text-md h-8 border-b-2 border-t-2 border-gray-400 px-4 py-2 text-left text-sm font-bold italic text-[#A0A0A0] md:h-12">
                  LOCATION
                </th>
                <th className="sm:text-mdl h-8 border-b-2 border-t-2 border-gray-400 px-4 py-2 text-left text-sm font-bold italic text-[#A0A0A0] md:h-12"></th>
              </tr>
            </thead>
            <tbody>
              {filter.map((e: any, ind: number) => {
                return (
                  <tr key={ind}>
                    <td className="h-8 border-b border-gray-400 px-4 py-2 text-xs uppercase italic md:h-12 md:text-sm">
                      {e.title}
                    </td>
                    <td className="h-8 border-b border-gray-400 px-4 py-2 text-xs uppercase text-gray-300 md:h-12 md:text-sm">
                      {e.location}
                    </td>
                    <td className="h-8 border-b border-gray-400 px-4 py-2 md:h-12">
                      <Link to={e.to}>
                        <h3 className="group relative top-[-5px] w-fit text-white max-md:text-sm">
                          Apply
                          <span className="absolute bottom-0 left-0 h-[2px] w-full bg-orange-400 transition-all group-hover:w-[120%]"></span>
                        </h3>
                      </Link>
                      {/* <HoverLink name="Apply" to={e.to} /> */}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {(!data.jobs || data.jobs.length == 0) && (
            <div className="flex w-full flex-col items-center border-b border-gray-400 py-6 md:py-12">
              {data.emptyList?.map((e: string, ind: number) => (
                <p key={ind} className="text-gray-400">
                  {e}
                </p>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Wrapper>
  )
}
