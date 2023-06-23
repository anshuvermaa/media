import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/organisms/Hero'
import data from '../data/EnvironmentalPolicy.json'

export default function environmentalpolicy() {
  return (
    <Layout>
      <Hero className="bg-theme-black pb-12" style={{ height: 'fit-content', minHeight: '100vh' }}>
        <div className="grid grid-cols-1 gap-5 pt-48 sm:mx-[10%] sm:mx-0 sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_2fr]">
          <div className="flex w-fit flex-col gap-y-5 sm:mx-auto sm:mt-10">
            <h4 className="py-3 text-2xl italic">{data.sideNavBar.heading}</h4>
            {data.sideNavBar.links.map((e: any, ind: number) => (
              <Link to={e.to} key={ind}>
                <h6 className="text-lg font-bold italic opacity-70">{e.title}</h6>
              </Link>
            ))}
          </div>
          <div>
            <h1 className="mb-3 text-2xl lg:text-4xl">{data.head}</h1>
            <h5 className="text-xs font-extralight text-[#5A5A5A]">{data.update}</h5>
            <p className="py-8 text-xs font-light md:text-base">{data.body}</p>
            {data.polices.map((e: any, ind: number) => {
              return (
                <div key={ind}>
                  <h2 className="text-center text-xl">{e.heading}</h2>
                  <p className="py-4 text-xs font-light md:text-base">{e.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Hero>
    </Layout>
  )
}
