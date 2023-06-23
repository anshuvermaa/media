import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../../components/Layout'
import Footer from '../../components/molecules/Footer'
import Community from '../../components/molecules/JoinUs/Community'
import JobListing from '../../components/molecules/JoinUs/JobListing'
import Values from '../../components/organisms/AboutUs/Values'
import BigLinkSection from '../../components/organisms/BigLinkSection'
import Hero from '../../components/organisms/Hero'
import Data from '../../data/JoinUs/Careers.json'

export default function careers({ data }: PageProps<Queries.CareersPageQuery>) {
  console.log(data)
  return (
    <Layout>
      <Hero
        bgImg={data.wpPost?.careers?.mainbackgroundimage?.localFile?.publicURL}
        head={data.wpPost?.careers?.mainHeading}
        body={'Jump to Vacancies'}
        bodyClassName="border-b-2 border-b-orange-500 cursor-pointer px-0 hover:px-2 [transition:0.5]"
      ></Hero>
      <Community
        data={{
          heading: data.wpPost?.careers?.ctaHeading,
          body: [data.wpPost?.careers?.ctaText],
          title: 'SHOWING OFF OUR COMMUNITY',
          works: data.wpPost?.careers?.communitybenefits?.map((e) => {
            return {
              img: e?.communitybenefit?.image?.localFile?.publicURL,
              title: e?.communitybenefit?.title,
            }
          }),
        }}
      />
      <Values
        data={{
          head: data.wpPost?.careers?.values?.valuesHeading,
          keyPoints: data.wpPost?.careers?.values?.values?.map((e) => {
            return e?.value
          }),
          title: data.wpPost?.careers?.values?.valuesMainText,
          body: data.wpPost?.careers?.values?.valuesSubText,
          bgImg:
            data.wpPost?.careers?.careercontactus?.contactusbackgroundimage?.localFile?.publicURL,
        }}
        color="text-slate-900"
      />
      <JobListing
        data={{
          emptyList: ['There is currently no Live jobs', 'Please come back at a later date'],
          jobs: data.wpPost?.careers?.joblistings?.map((e) => {
            return {
              title: e?.joblisting?.jobTitle,
              location: e?.joblisting?.jobLocation,
              to: e?.joblisting?.applicationLink,
            }
          }),
        }}
      />
      <div className="h-6 w-full"></div>
      <BigLinkSection
        data={{
          head: data.wpPost?.careers?.careercontactus?.contactUsSubheading,
          title: data.wpPost?.careers?.careercontactus?.contactUsHeading,
          linkTitle: data.wpPost?.careers?.careercontactus?.contactUsLinkText,
          to: data.wpPost?.careers?.careercontactus?.contactUsLink,
          bgImg:
            data.wpPost?.careers?.careercontactus?.contactusbackgroundimage?.localFile?.publicURL,
        }}
      />
      <div className="h-6 w-full"></div>
      <BigLinkSection
        data={{
          head: data.wpPost?.careers?.freelancers?.freelanceSubheading,
          title: data.wpPost?.careers?.freelancers?.freelanceHeading,
          linkTitle: data.wpPost?.careers?.freelancers?.freelanceLinkText,
          to: data.wpPost?.careers?.freelancers?.freelanceLink,
          bgImg: data.wpPost?.careers?.freelancers?.freelancebackgroundimage?.localFile?.publicURL,
        }}
      />
      <Footer />
    </Layout>
  )
}
export const query = graphql`
  query CareersPage {
    wpPost(categories: { nodes: { elemMatch: { name: { eq: "Careers" } } } }) {
      careers {
        communitybenefits {
          communitybenefit {
            title
            image {
              localFile {
                publicURL
              }
            }
          }
        }
        careercontactus {
          contactusbackgroundimage {
            localFile {
              publicURL
            }
          }
          contactUsHeading
          contactUsLinkText
          contactUsSubheading
          contactUsLink
        }
        ctaHeading
        ctaText
        freelancers {
          freelanceLinkText
          freelanceSubheading
          freelanceLink
          freelanceHeading
          freelancebackgroundimage {
            localFile {
              publicURL
            }
          }
        }
        joblistings {
          joblisting {
            jobLocation
            applicationLink
            jobTitle
          }
        }
        mainbackgroundimage {
          localFile {
            publicURL
          }
        }
        mainHeading
        values {
          valuesSubText
          valuesMainText
          valuesHeading
          values {
            value
          }
        }
      }
    }
  }
`
