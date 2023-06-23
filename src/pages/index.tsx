import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Container from '../components/atoms/Container'
import Layout from '../components/Layout'
import Hero from '../components/organisms/Hero'

const HomePage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <Hero
          bgImg={`https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          id="HomePage"
          logo
          hideUpArraow
        >
          <div className="absolute left-0 bottom-10 h-fit w-fit">
            <StaticImage src={'../images/GVM_Logo.svg'} height={200} alt="" />
            <p className="pt-2 text-sm font-thin">Connecting the World</p>
          </div>
        </Hero>
      </Layout>
    </>
  )
}

export default HomePage

export const Head: HeadFC = () => <title>Home Page</title>
