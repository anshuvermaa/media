import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../../components/Layout'
import Footer from '../../components/molecules/Footer'
import Leadership from '../../components/organisms/AboutUs/Leadership'
import Values from '../../components/organisms/AboutUs/Values'
import BigLinkSection from '../../components/organisms/BigLinkSection'
import Hero from '../../components/organisms/Hero'
import TextDivSection from '../../components/organisms/TextDivSection'
import Data from '../../data/AboutUs/OurTeam.json'

export default function index({ data }: PageProps<Queries.OurTeamPageQuery>) {
  console.log(data)
  return (
    <>
      <Layout>
        <Hero
          bgImg={data.wpPost?.ourTeam?.mainBackgroundImage?.localFile?.publicURL}
          head={data.wpPost?.ourTeam?.mainHeading}
          body={data.wpPost?.ourTeam?.mainSubheading}
        ></Hero>
        <Leadership
          className="bg-theme-black py-4 md:py-12"
          data={{
            head: 'LEADERSHIP',
            leaders: data.teamMembers?.nodes?.map((e) => {
              return {
                name: e?.teamMember?.fullName,
                position: e?.teamMember?.jobTitleAndRegion,
                img: e?.teamMember?.photo?.localFile?.publicURL,
                link: e?.slug,
              }
            }),
          }}
        />
        <Values
          data={{
            head: data.wpPost?.ourTeam?.ourteamvalues?.valuesHeading,
            keyPoints: data.wpPost?.ourTeam?.ourteamvalues?.values?.map((e) => {
              return e?.value
            }),
            title: data.wpPost?.ourTeam?.ourteamvalues?.valuesMainText,
            body: data.wpPost?.ourTeam?.ourteamvalues?.valuesSubText,
          }}
          color="text-slate-900"
        />
        <TextDivSection
          data={data.wpPost?.ourTeam?.ourteamroles?.map((e) => {
            return {
              heading: e?.role?.roleHeading,
              title: e?.role?.roleMainText,
              body: e?.role?.roleSubText,
              img: e?.role?.roleImage?.localFile?.publicURL,
            }
          })}
          type="para"
          imgClassName=" min-h-[100vh] h-fit md:min-h-[80vh]"
        />
        <BigLinkSection
          data={{
            head: data.wpPost?.ourTeam?.ourteamcontactUs?.contactUsSubheading,
            title: data.wpPost?.ourTeam?.ourteamcontactUs?.contactUsHeading,
            linkTitle: data.wpPost?.ourTeam?.ourteamcontactUs?.contactUsLinkText,
            to: data.wpPost?.ourTeam?.ourteamcontactUs?.contactUsLink,
            bgImg:
              data.wpPost?.ourTeam?.ourteamcontactUs?.contactUsBackgroundImage?.localFile
                ?.publicURL,
          }}
        />
        <Footer />
      </Layout>
    </>
  )
}
export const query = graphql`
  query OurTeamPage {
    teamMembers: allWpPost(
      filter: { categories: { nodes: { elemMatch: { name: { eq: "Team Member Profile" } } } } }
    ) {
      nodes {
        slug
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
    wpPost(categories: { nodes: { elemMatch: { name: { eq: "Team" } } } }) {
      ourTeam {
        ourteamcontactUs {
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
        leaders {
          jobTitle
          name
          profileLink
          photo {
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
        mainSubheading
        mainHeading
        ourteamroles {
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
        ourteamvalues {
          valuesHeading
          valuesMainText
          valuesSubText
          values {
            value
          }
        }
      }
    }
  }
`
