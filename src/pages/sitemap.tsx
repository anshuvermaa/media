import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Footer from '../components/molecules/Footer'
import Hero from '../components/organisms/Hero'
import Data from '../data/SiteMap.json'
const RAW_DATA: any = {
  head: 'SITEMAP',
  mappings: [
    {
      title: 'Home',
      link: '/',
      mappings: [],
    },
  ],
}

export default function sitemap({ data }: PageProps<Queries.SitemapPageQuery>) {
  RAW_DATA.mappings.push({
    title: 'About',
    link: '/aboutus',
    mappings: [
      {
        title: 'Meet our Team',
        link: '/ourteam',
        mappings: data.teamMembers.nodes.map((node) => ({
          title: node.teamMember?.fullName,
          link: '/ourteam/' + node.slug,
        })),
      },
    ],
  })
  RAW_DATA.mappings.push({
    title: 'Services',
    link: '/services',
    mappings: data.services.nodes.map((node) => ({
      title: node.singleService?.mainHeading,
      link: '/services/' + node.slug,
    })),
  })
  RAW_DATA.mappings.push({
    title: 'Technology',
    link: '/technology',
    mappings: data.technologies.nodes.map((node) => ({
      title: node.gvmPortal?.mainHeading,
      link: '/technology/' + node.slug,
    })),
  })
  RAW_DATA.mappings = [
    ...RAW_DATA.mappings,
    ...[
      {
        title: 'Join Us',
        link: '/joinus',
        mappings: [
          {
            title: 'Careers',
            link: '/joinus/careers',
            mappings: [],
          },
          {
            title: 'Freelance',
            link: '/joinus/freelance',
            mappings: [],
          },
        ],
      },
      {
        title: 'Talk to an expert',
        link: '/contactus',
        mappings: [],
      },
      {
        title: 'Terms and Conditions',
        link: '/termsandconditions',
        mappings: [],
      },
      {
        title: 'Privacy Policy',
        link: '/privacypolicy',
        mappings: [],
      },
      {
        title: 'Environmental Policy',
        link: '/environmentalpolicy',
        mappings: [],
      },
    ],
  ]
  return (
    <Layout>
      <Hero
        className="flex flex-col bg-theme-black"
        style={{ height: 'fit-content', minHeight: '100vh' }}
      >
        <h2 className="border-b-[1px] pt-48 pb-5 text-2xl md:text-4xl">{Data.head}</h2>
        {RAW_DATA.mappings?.map((e: any, ind: number) => {
          return (
            <div className="border-b-[1px] py-5" key={ind}>
              <Link to={e.link}>
                <h3 className=" text-lg font-semibold md:text-xl">{e.title}</h3>
              </Link>
              {e.mappings?.map((e: any, ind: number) => {
                return (
                  <div key={ind}>
                    <Link to={e.link}>
                      <h4 className="pl-10 text-base font-light md:text-lg">{e.title}</h4>
                    </Link>
                    {e.mappings?.map((e: any, ind: number) => {
                      return (
                        <Link to={e.link} key={ind}>
                          <h5 className=" pl-20 text-xs font-thin md:text-sm">{e.title}</h5>
                        </Link>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
      </Hero>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query SitemapPage {
    teamMembers: allWpPost(
      filter: { categories: { nodes: { elemMatch: { name: { eq: "Team Member Profile" } } } } }
    ) {
      nodes {
        slug
        teamMember {
          fullName
        }
      }
    }
    services: allWpPost(
      filter: { categories: { nodes: { elemMatch: { name: { eq: "Service" } } } } }
    ) {
      nodes {
        slug
        singleService {
          mainHeading
        }
      }
    }
    technologies: allWpPost(
      filter: { categories: { nodes: { elemMatch: { name: { eq: "Single Technology" } } } } }
    ) {
      nodes {
        slug
        gvmPortal {
          mainHeading
        }
      }
    }
  }
`
