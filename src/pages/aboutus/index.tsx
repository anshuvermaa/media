import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../../components/Layout'
import BigLink from '../../components/molecules/BigLink'
import Footer from '../../components/molecules/Footer'
import WeProvideServiceTo from '../../components/molecules/WeProvideServiceTo'
import BigHeadingSection from '../../components/organisms/AboutUs/BigHeadingSection'
import PridePoints from '../../components/organisms/AboutUs/PridePoints'
import StrongTeam from '../../components/organisms/AboutUs/StrongTeam'
import BigLinkSection from '../../components/organisms/BigLinkSection'
import Hero from '../../components/organisms/Hero'
import Data from '../../data/AboutUs.json'

export default function index({ data }: PageProps<Queries.AboutUsPageQuery>) {
  console.log(data)
  return (
    <>
      <Layout>
        <Hero
          bgImg={data.wpPost?.about?.mainbackground?.localFile?.publicURL}
          head={data.wpPost?.about?.mainHeading}
          body={data.wpPost?.about?.mainSubheading}
        ></Hero>
        <BigHeadingSection
          data={{
            title: data.wpPost?.about?.mainText,
            body: [data.wpPost?.about?.mainSubtext],
          }}
        />
        <BigLinkSection
          data={{
            title: data.wpPost?.about?.servicessection?.sectionHeading,
            to: data.wpPost?.about?.servicessection?.sectionLink,
            bgImg: data.wpPost?.about?.servicessection?.sectionbackground?.localFile?.publicURL,
          }}
        />
        <PridePoints
          data={{
            heading: data.wpPost?.about?.servicessection?.sectionCatchphrase,
            points: data.wpPost?.about?.servicessection?.sectionbullets?.map((e) => {
              return e?.sectionBullet
            }),
            title: data.wpPost?.about?.servicessection?.sectionMainText,
            body: data.wpPost?.about?.servicessection?.sectionSubText,
          }}
        />
        <BigLinkSection
          data={{
            title: data.wpPost?.about?.technologybanner?.bannerText,
            to: data.wpPost?.about?.technologybanner?.bannerLink,
            bgImg: data.wpPost?.about?.technologybanner?.bannerimage?.localFile?.publicURL,
          }}
        />
        <StrongTeam
          data={{
            heading: data.wpPost?.about?.team?.sectionHeading,
            link: {
              to: data.wpPost?.about?.team?.sectionLink,
              name: data.wpPost?.about?.team?.sectionLinkTitle,
            },
            title: data.wpPost?.about?.team?.sectionMainText,
            body: data.wpPost?.about?.team?.sectionSubText,
          }}
        />
        <WeProvideServiceTo
          data={{
            mainHeading: 'TRUSTED BY',
            customers: data.wpPost?.about?.trustedby?.map((e) => {
              return e?.trustedbyimage?.localFile?.publicURL
            }),
          }}
          className="text-black"
          color="#000000"
        />
        <BigLinkSection
          data={{
            head: data.wpPost?.about?.contactus?.contactUsSubheading,
            title: data.wpPost?.about?.contactus?.contactUsHeading,
            linkTitle: data.wpPost?.about?.contactus?.contactUsLinkText,
            to: data.wpPost?.about?.contactus?.contactUsLink,
            bgImg: data.wpPost?.about?.contactus?.contactusbackgroundimage?.localFile?.publicURL,
          }}
        />
        <Footer />
      </Layout>
    </>
  )
}

export const query = graphql`
  query AboutUsPage {
    wpPost(categories: { nodes: { elemMatch: { name: { eq: "About" } } } }) {
      about {
        contactus {
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
        mainbackground {
          localFile {
            publicURL
          }
        }
        mainHeading
        mainSubheading
        mainSubtext
        mainText
        servicessection {
          sectionCatchphrase
          sectionLink
          sectionHeading
          sectionMainText
          sectionSubText
          sectionbullets {
            sectionBullet
          }
          sectionbackground {
            localFile {
              publicURL
            }
          }
        }
        subtextimages {
          subtextimage {
            localFile {
              publicURL
            }
          }
        }
        team {
          sectionLink
          sectionLinkTitle
          sectionMainText
          sectionSubText
          sectionHeading
        }
        technologybanner {
          bannerLink
          bannerText
          bannerimage {
            localFile {
              publicURL
            }
          }
        }
        trustedby {
          trustedbyimage {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
