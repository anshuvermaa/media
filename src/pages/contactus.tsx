import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import Footer from '../components/molecules/Footer'
import HeadOffice from '../components/molecules/JoinUs/HeadOffice'
import OtherLocations from '../components/molecules/JoinUs/OtherLocations'
import ContactForm from '../components/organisms/ContactForm'
import Hero from '../components/organisms/Hero'
import Data from '../data/contactus.json'

export default function contactus({ data }: PageProps<Queries.ContactUsPageQuery>) {
  return (
    <Layout>
      <Hero
        bgImg={data.wpPost?.contactUs?.mainBackground?.localFile?.publicURL}
        head={data.wpPost?.contactUs?.mainHeading}
        body={data.wpPost?.contactUs?.mainSubheading}
      ></Hero>
      <ContactForm data={Data.Form} />
      <HeadOffice
        data={{
          head: 'HEAD OFFICE',
          bgImg: data.wpPost?.contactUs?.headOfficeBackgroundImage?.localFile?.publicURL,
          address: [
            data.wpPost?.contactUs?.headOfficeAddress1 + ',',
            data.wpPost?.contactUs?.headOfficeAddress2 + ',',
            data.wpPost?.contactUs?.headOfficeAddress3 + ',',
            data.wpPost?.contactUs?.headOfficeAddress4,
          ],
          number: data.wpPost?.contactUs?.headOfficeContactNumber,
          email: data.wpPost?.contactUs?.headOfficeEmail,
        }}
      />
      <OtherLocations
        data={{
          head: 'OTHER LOCATIONS',
          cities: data.wpPost?.contactUs?.otherlocations?.map((e) => {
            return {
              city: e?.location?.locationTitle,
              email: e?.location?.locationEmailAddress,
              number: e?.location?.locationContactNumber,
              img: e?.location?.locationImage?.localFile?.publicURL,
            }
          }),
        }}
      />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query ContactUsPage {
    wpPost(categories: { nodes: { elemMatch: { name: { eq: "Contact Us" } } } }) {
      contactUs {
        headOfficeEmail
        headOfficeContactNumber
        headOfficeAddress1
        headOfficeAddress2
        headOfficeAddress3
        headOfficeAddress4
        headOfficeBackgroundImage {
          localFile {
            publicURL
          }
        }
        mainBackground {
          localFile {
            publicURL
          }
        }
        mainHeading
        mainSubheading
        otherlocations {
          location {
            locationEmailAddress
            locationContactNumber
            locationTitle
            locationImage {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`
