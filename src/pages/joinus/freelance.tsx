import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../../components/Layout'
import Footer from '../../components/molecules/Footer'
import JoinCommunity from '../../components/molecules/JoinUs/JoinCommunity'
import WeProvideServiceTo from '../../components/molecules/WeProvideServiceTo'
import BigLinkSection from '../../components/organisms/BigLinkSection'
import Hero from '../../components/organisms/Hero'
import TextDivSection from '../../components/organisms/TextDivSection'
import Data from '../../data/JoinUs/Freelance.json'

export default function freelance({ data }: PageProps<Queries.FreelancePageQuery>) {
  console.log(data)
  return (
    <Layout>
      <Hero
        bgImg={data.wpPost?.freelance?.mainBackgroundImage?.localFile?.publicURL}
        head={data.wpPost?.freelance?.mainHeading}
        body={data.wpPost?.freelance?.mainSubheading}
        links={data.wpPost?.freelance?.roles?.map((e) => {
          return {
            serviceType: e?.role?.roleHeading,
            redirectUrl: '#' + e?.role?.roleHeading?.split(' ').join(''),
          }
        })}
      ></Hero>
      <JoinCommunity
        data={{
          heading: data.wpPost?.freelance?.ctaMainText,
          body: [data.wpPost?.freelance?.ctaSubtext],
        }}
      />
      <TextDivSection
        data={data.wpPost?.freelance?.roles?.map((e) => {
          return {
            heading: e?.role?.roleHeading?.toUpperCase(),
            id: e?.role?.roleHeading?.split(' ').join(''),
            title: e?.role?.roleMainText,
            body: e?.role?.roleSubText,
            img: e?.role?.roleImage?.localFile?.publicURL,
          }
        })}
        type="para"
        imgClassName="min-h-[60vh] h-fit"
      />
      <WeProvideServiceTo
        data={{
          mainHeading: 'TRUSTED BY',
          customers: data.wpPost?.freelance?.freelancetrustedby?.map((e) => {
            return e?.trustedByImage?.localFile?.publicURL
          }),
        }}
        className="bg-theme-black"
      />
      <BigLinkSection
        data={{
          head: data.wpPost?.freelance?.freelancecontactus?.contactUsSubheading,
          title: data.wpPost?.freelance?.freelancecontactus?.contactUsHeading,
          linkTitle: data.wpPost?.freelance?.freelancecontactus?.contactUsLinkText,
          to: data.wpPost?.freelance?.freelancecontactus?.contactUsLink,
          bgImg:
            data.wpPost?.freelance?.freelancecontactus?.contactUsBackgroundImage?.localFile
              ?.publicURL,
        }}
      />
      <Footer />
    </Layout>
  )
}
export const query = graphql`
  query FreelancePage {
    wpPost(categories: { nodes: { elemMatch: { name: { eq: "Freelance" } } } }) {
      freelance {
        freelancecontactus {
          contactUsHeading
          contactUsLink
          contactUsLinkText
          contactUsSubheading
          contactUsBackgroundImage {
            localFile {
              publicURL
            }
          }
        }
        ctaSubtext
        ctaMainText
        mainBackgroundImage {
          localFile {
            publicURL
          }
        }
        mainHeading
        mainSubheading
        roles {
          role {
            roleHeading
            roleMainText
            roleSubText
            roleImage {
              localFile {
                publicURL
              }
            }
          }
        }
        freelancetrustedby {
          trustedByImage {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
