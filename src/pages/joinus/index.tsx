import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'

import Layout from '../../components/Layout'
import BigLink from '../../components/molecules/BigLink'
import Footer from '../../components/molecules/Footer'
import WeProvideServiceTo from '../../components/molecules/WeProvideServiceTo'
import Values from '../../components/organisms/AboutUs/Values'
import BigLinkSection from '../../components/organisms/BigLinkSection'
import Hero from '../../components/organisms/Hero'
import TextDivSection from '../../components/organisms/TextDivSection'
import Data from '../../data/JoinUsHomePage.json'

export default function index({ data }: PageProps<Queries.JoinUsPageQuery>) {
  return (
    <Layout>
      <Hero
        bgImg={data.wpPost?.joinUs?.mainBackgroundImage?.localFile?.publicURL}
        head={data.wpPost?.joinUs?.mainHeading}
        body={data.wpPost?.joinUs?.mainSubheading}
        links={Data.links}
      ></Hero>
      <TextDivSection
        data={data.wpPost?.joinUs?.joinussections?.map((e) => {
          return {
            heading: e?.section?.sectionHeading,
            title: e?.section?.sectionIntroduction,
            body: e?.section?.sectionText,
            img: e?.section?.sectionImage?.localFile?.publicURL,
            to: e?.section?.sectionLink,
            linkTitle: e?.section?.sectionLinkText,
          }
        })}
        type="para"
        imgClassName={'min-h-[40vh] h-fit'}
      />
      <Values
        data={{
          head: data.wpPost?.joinUs?.joinusvalues?.valuesHeading,
          keyPoints: data.wpPost?.joinUs?.joinusvalues?.values?.map((e) => {
            return e?.value
          }),
          title: data.wpPost?.joinUs?.joinusvalues?.valuesMainText,
          body: data.wpPost?.joinUs?.joinusvalues?.valuesSubText,
        }}
        className="bg-theme-black"
        color=""
      />
      <WeProvideServiceTo
        data={{
          mainHeading: 'TRUSTED BY',
          customers: data.wpPost?.joinUs?.joinustrustedby?.map((e) => {
            return e?.trustedByImage?.localFile?.publicURL
          }),
        }}
        className="bg-theme-black"
      />
      <BigLinkSection
        data={{
          head: data.wpPost?.joinUs?.joinuscontactus?.contactUsSubheading,
          title: data.wpPost?.joinUs?.joinuscontactus?.contactUsHeading,
          linkTitle: data.wpPost?.joinUs?.joinuscontactus?.contactUsLinkText,
          to: data.wpPost?.joinUs?.joinuscontactus?.contactUsLink,
          bgImg:
            data.wpPost?.joinUs?.joinuscontactus?.contactUsBackgroundImage?.localFile?.publicURL,
        }}
      />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query JoinUsPage {
    wpPost(categories: { nodes: { elemMatch: { name: { eq: "Join Our Network" } } } }) {
      joinUs {
        joinuscontactus {
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
        mainBackgroundImage {
          localFile {
            publicURL
          }
        }
        mainHeading
        mainSubheading
        joinussections {
          section {
            sectionHeading
            sectionIntroduction
            sectionLink
            sectionLinkText
            sectionText
            sectionImage {
              localFile {
                publicURL
              }
            }
          }
        }
        joinustrustedby {
          trustedByImage {
            localFile {
              publicURL
            }
          }
        }
        joinusvalues {
          valuesHeading
          valuesMainText
          values {
            value
          }
          valuesSubText
        }
      }
    }
  }
`
