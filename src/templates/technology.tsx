import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Footer from '../components/molecules/Footer'
import BigHeadingSection from '../components/molecules/Technology/BigHeadingSection'
import WeProvideServicesTo from '../components/molecules/WeProvideServiceTo'
import BigLinkSection from '../components/organisms/BigLinkSection'
import Hero from '../components/organisms/Hero'
import BigLinkDiv from '../components/organisms/Technology/BigLinkSection'
import PortalInAction from '../components/organisms/Technology/PortalInAction'
import Data from '../data/Technology/GvmPortal.json'

export default function index({ data }: PageProps<Queries.SingleTechnologyPageQuery>) {
  console.log(data)
  return (
    <>
      <Layout>
        <Hero
          className=""
          bgImg={data.wpPost?.gvmPortal?.mainImageBackground?.localFile?.publicURL}
          head={data.wpPost?.gvmPortal?.mainHeading}
          body={data.wpPost?.gvmPortal?.mainSubheading}
        ></Hero>
        <BigHeadingSection
          data={{
            title: data.wpPost?.gvmPortal?.mainText,
            body: data.wpPost?.gvmPortal?.mainSubtext,
          }}
        />
        <PortalInAction
          data={{
            heading: data.wpPost?.gvmPortal?.gvmportalsections?.sectionHeading,
            actions: data.wpPost?.gvmPortal?.gvmportalsections?.sections?.map((e) => {
              return {
                subHeadings: e?.section?.points?.map((f) => {
                  return { title: f?.subheading, body: f?.description }
                }),
                imgDetail: e?.section?.description,
                img: e?.section?.image?.localFile?.publicURL,
              }
            }),
          }}
        />
        <WeProvideServicesTo
          data={{
            mainHeading: 'TECHNOLOGY TRUSTED BY',
            customers: data.wpPost?.gvmPortal?.gvmportaltrustedby?.map((e) => {
              return e?.trustedByImages?.localFile?.publicURL
            }),
          }}
          className="bg-theme-black"
        />
        <BigLinkSection
          data={{
            head: data.wpPost?.gvmPortal?.gvmportalcontactus?.contactUsSubheading,
            title: data.wpPost?.gvmPortal?.gvmportalcontactus?.contactUsHeading,
            linkTitle: data.wpPost?.gvmPortal?.gvmportalcontactus?.contactUsLinkText,
            to: data.wpPost?.gvmPortal?.gvmportalcontactus?.contactUsLink,
            bgImg:
              data.wpPost?.gvmPortal?.gvmportalcontactus?.contactUsBackgroundImage?.localFile
                ?.publicURL,
          }}
        />
        <Footer />
      </Layout>
    </>
  )
}

export const query = graphql`
  query SingleTechnologyPage($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      gvmPortal {
        gvmportalcontactus {
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
        mainHeading
        mainImageBackground {
          localFile {
            publicURL
          }
        }
        mainSubheading
        mainSubtext
        mainText
        gvmportalsections {
          sectionHeading
          sections {
            section {
              description
              points {
                description
                subheading
              }
              image {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
        gvmportaltrustedby {
          trustedByImages {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
