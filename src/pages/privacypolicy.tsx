import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/organisms/Hero'
import data from '../data/PrivacyPolicy.json'

export default function privacypolicy() {
  return (
    <Layout>
      <Hero className="bg-theme-black pb-12" style={{ height: 'fit-content', minHeight: '100vh' }}>
        <div className="grid grid-cols-1 gap-5 pt-36 sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_2fr]">
          <div>
            {data.sideNavBar?.map((e: any, ind: number) => {
              return (
                <div key={ind}>
                  <h4 className="py-3 text-xs italic lg:text-xl">{e.title}</h4>
                  <div className="pl-5 lg:pl-10">
                    {e.subheadings?.map((e: any, ind: number) => (
                      <h6 className="text-xs font-bold italic opacity-70" key={ind}>
                        {e}
                      </h6>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <div>
            <h1 className="mb-3 text-2xl lg:text-4xl">{data.head}</h1>
            <h5 className="text-xs font-extralight text-[#5A5A5A]">{data.update}</h5>
            <p className="py-8 text-xs font-light opacity-75 lg:text-base">{data.body}</p>
            {data.polices?.map((e: any, ind: number) => {
              return (
                <div key={ind}>
                  <h2 className="text-base md:text-2xl">{e.heading}</h2>
                  {e.subheadings?.map((e: any, ind: number) => {
                    return (
                      <div key={ind}>
                        <h3 className="py-4 pl-5 text-sm md:pl-10 md:text-xl">{e.title}</h3>
                        <p className="py-4 text-xs font-light opacity-75 md:text-base">{e.body}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </Hero>
    </Layout>
  )
}
