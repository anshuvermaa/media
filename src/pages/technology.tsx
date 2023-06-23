import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Footer from '../components/molecules/Footer'
import BigHeadingSection from '../components/molecules/Technology/BigHeadingSection'
import WeProvideServicesTo from '../components/molecules/WeProvideServiceTo'
import BigLinkSection from '../components/organisms/BigLinkSection'
import Hero from '../components/organisms/Hero'
import BigLinkDiv from '../components/organisms/Technology/BigLinkSection'
import Data from '../data/TechnologyHomePage.json'

export default function index({ data }: PageProps<Queries.TechnologyPageQuery>) {
  return (
    <>
      <Layout>
        <Hero
          className=""
          bgImg={data.wpPost?.technology?.mainBackgroundImage?.localFile?.publicURL}
          head={data.wpPost?.technology?.mainHeading}
          body={data.wpPost?.technology?.mainSubHeading}
        ></Hero>
        <BigHeadingSection
          data={{
            title: data.wpPost?.technology?.ctaMainText,
            body: data.wpPost?.technology?.ctaSubText,
            headingBtn: 'Talk to an expert',
          }}
        />
        <div>
          {data.wpPost?.technology?.technologies?.map((e, ind) => {
            return (
              <BigLinkDiv
                data={{
                  title: e?.heading,
                  body: [e?.description],
                  to: e?.linkUrl,
                  linkTitle: e?.linkHeading,
                  img: e?.image?.localFile?.publicURL,
                }}
                key={ind}
              />
            )
          })}
        </div>

        <WeProvideServicesTo
          data={{
            preDetails: {
              title: data.wpPost?.technology?.technologysection?.sectionHeading,
              subheadings: data.wpPost?.technology?.technologysection?.subSections?.map((e) => {
                return { title: e?.subSectionHeading, body: e?.subSectionText }
              }),
            },
            mainHeading: 'TECHNOLOGY TRUSTED BY',
            customers: data.wpPost?.technology?.technologytrustedBy?.map(
              (e) => e?.trustedByLogo?.localFile?.publicURL
            ),
          }}
          className="bg-theme-black"
        />
        <BigLinkSection
          data={{
            head: data.wpPost?.technology?.technologycontactUs?.contactUsSubheading,
            title: data.wpPost?.technology?.technologycontactUs?.contactUsHeading,
            linkTitle: data.wpPost?.technology?.technologycontactUs?.contactUsLinkText,
            to: data.wpPost?.technology?.technologycontactUs?.contactUsLink,
            bgImg:
              data.wpPost?.technology?.technologycontactUs?.contactUsBackgroundImage?.localFile
                ?.publicURL,
          }}
        />
        <Footer />
      </Layout>
    </>
  )
}
export const query = graphql`
  query TechnologyPage {
    wpPost(categories: { nodes: { elemMatch: { name: { eq: "Technology" } } } }) {
      technology {
        ctaMainText
        ctaSubText
        mainBackgroundImage {
          localFile {
            publicURL
          }
        }
        mainHeading
        mainSubHeading
        technologies {
          description
          heading
          linkHeading
          linkUrl
          image {
            localFile {
              publicURL
            }
          }
        }
        technologycontactUs {
          contactUsLink
          contactUsLinkText
          contactUsSubheading
          contactUsHeading
          contactUsBackgroundImage {
            localFile {
              publicURL
            }
          }
        }
        technologytrustedBy {
          trustedByLogo {
            localFile {
              publicURL
            }
          }
        }
        technologysection {
          sectionHeading
          subSections {
            subSectionText
            subSectionHeading
          }
        }
      }
    }
  }
`
