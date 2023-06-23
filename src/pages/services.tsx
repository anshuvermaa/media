import React from 'react'
import { link } from 'fs'
import { graphql, Link, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Footer from '../components/molecules/Footer'
import WeProvideServiceTo from '../components/molecules/WeProvideServiceTo'
import BigLinkSection from '../components/organisms/BigLinkSection'
import Hero from '../components/organisms/Hero'
import TextDivSection from '../components/organisms/TextDivSection'
import Data from '../data/ServiceHomePage.json'

export default function Index({ data }: PageProps<Queries.ServicesPageQuery>) {
  console.log(data)
  return (
    <>
      <Layout>
        <Hero
          className=""
          bgImg={data.wpPost?.servicesMainPage?.mainBackground?.localFile?.publicURL}
          head={data.wpPost?.servicesMainPage?.heading || ''}
          body={data.wpPost?.servicesMainPage?.heading || ''}
          links={
            data.services?.nodes?.map((node) => ({
              redirectUrl: node.slug,
              serviceType: node.singleService?.mainHeading,
            })) || []
          }
        ></Hero>
        <TextDivSection
          data={data.services?.nodes?.map((service) => ({
            title: service?.singleService?.mainHeading,
            img: service?.singleService?.mainBackground?.localFile?.publicURL,
            body: service?.singleService?.mainSubheading,
            link: service.slug,
          }))}
          type="link"
          imgClassName="min-h-[40vh] h-fit md:min-h-[55vh] "
        />
        <WeProvideServiceTo
          className="bg-theme-black "
          data={{
            mainHeading: 'WE PROVIDE OUR SERVICES TO',
            customers: data.wpPost?.servicesMainPage?.servicescustomers?.map((e) => {
              return e?.customerLogo?.localFile?.publicURL
            }),
          }}
        />
        <BigLinkSection
          data={{
            head: data.wpPost?.servicesMainPage?.servicescontactUs?.contactUsSubheading,
            title: data.wpPost?.servicesMainPage?.servicescontactUs?.contactUsHeading,
            linkTitle: data.wpPost?.servicesMainPage?.servicescontactUs?.contactUsLinkText,
            to: data.wpPost?.servicesMainPage?.servicescontactUs?.contactUsLink,
            bgImg:
              data.wpPost?.servicesMainPage?.servicescontactUs?.contactUsBackgroundImage?.localFile
                ?.publicURL,
          }}
        />
        <Footer />
      </Layout>
    </>
  )
}
export const query = graphql`
  query ServicesPage {
    services: allWpPost(
      filter: { categories: { nodes: { elemMatch: { name: { eq: "Service" } } } } }
    ) {
      nodes {
        slug
        singleService {
          mainHeading
          mainSubheading
          mainBackground {
            localFile {
              publicURL
            }
          }
        }
      }
    }
    wpPost(categories: { nodes: { elemMatch: { name: { eq: "Services" } } } }) {
      servicesMainPage {
        heading
        subheading
        servicescustomers {
          customerLogo {
            localFile {
              publicURL
            }
          }
        }
        servicesservices {
          redirectUrl
          serviceDescription
          serviceType
          serviceImage {
            localFile {
              publicURL
            }
          }
        }
        mainBackground {
          localFile {
            publicURL
          }
        }
        servicescontactUs {
          contactUsHeading
          contactUsSubheading
          contactUsLinkText
          contactUsLink
          contactUsBackgroundImage {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
