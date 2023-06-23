import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { HiChevronLeft } from 'react-icons/hi'

import Hr from '../components/atoms/Hr'
import SideBluredImage from '../components/atoms/SideBluredImage'
import Layout from '../components/Layout'
import Footer from '../components/molecules/Footer'
import Hero from '../components/organisms/Hero'

export default function leader({ data }: PageProps<Queries.TeamMemberPageQuery>) {
  return (
    <Layout>
      <Hero
        className="flex flex-col bg-theme-black "
        style={{ height: 'fit-content', minHeight: '100vh' }}
      >
        <div className="mb-10 h-full w-full pt-36">
          <Link to="/ourteam" className="flex items-center">
            <HiChevronLeft className="leftArrow" size={65} />
            Back to our Team
          </Link>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1fr_2fr]">
            <SideBluredImage
              side="left"
              className="h-[60vh] sm:mx-[10%] md:w-full"
              alt="leader.png"
              src={data.wpPost?.teamMember?.photo?.localFile?.publicURL}
              shadeColor="rgb(17 24 39)"
            />
            <div className="sm:mx-[10%]">
              <h2 className="text-4xl ">{data.wpPost?.teamMember?.fullName}</h2>
              <h6 className="py-2 text-base font-semibold text-orange-500 ">
                {data.wpPost?.teamMember?.jobTitleAndRegion}
              </h6>
              <h4>{data.wpPost?.teamMember?.emailAddress}</h4>
              <Hr className="h-[2px] bg-orange-500" />
              <p className="pt-4 text-sm font-light">{data.wpPost?.teamMember?.description}</p>
            </div>
          </div>
        </div>
      </Hero>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query TeamMemberPage($slug: String) {
    wpPost(slug: { eq: $slug }) {
      teamMember {
        description
        emailAddress
        jobTitleAndRegion
        fullName
        photo {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`
