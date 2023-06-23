import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/organisms/Hero'
import data from '../data/TermsAndConditions.json'

export default function privacypolicy() {
  return (
    <>
      <Layout>
        <Hero
          className="bg-theme-black pb-12"
          style={{ height: 'fit-content', minHeight: '100vh' }}
        >
          <div className="pt-48 md:mx-[10%] ">
            <h1 className="mb-3 text-4xl">{data.head}</h1>
            <h5 className="text-xs font-extralight text-[#5A5A5A] ">{data.update}</h5>
            <p className="py-8 text-base font-light">{data.body}</p>
            {data.polices.map((e: any, ind: number) => {
              return (
                <div key={ind}>
                  <h2 className="text-2xl ">{e.heading}</h2>
                  {e.subheadings.map((e: any, ind: number) => {
                    return (
                      <div key={ind}>
                        <h3 className="flex justify-center py-4 pl-6 text-xl">{e.title}</h3>
                        <p className="py-4 text-base font-light">{e.body}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </Hero>
      </Layout>
    </>
  )
}
