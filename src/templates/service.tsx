import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import ServicesTemplate from '../components/organisms/Services/ServicesTemplate'
import Data from '../data/Services/AudioDescription.json'

export default function service({ data }: PageProps<Queries.SingleServicePageQuery>) {
  console.log(data)
  return (
    <Layout>
      <ServicesTemplate
        Data={{
          head: data.wpPost?.singleService?.mainHeading,
          body: data.wpPost?.singleService?.mainSubheading,
          bgImg: data.wpPost?.singleService?.mainBackground?.localFile?.publicURL,
          bigHeading: {
            heading: data.wpPost?.singleService?.ctaHeading,
            headingDetail: data.wpPost?.singleService?.ctaSubheading,
            headingBtn: 'Talk to an expert',
            detailHeading: data.wpPost?.singleService?.ctaDescription,
            detailBody: data.wpPost?.singleService?.ctaSubDescription,
            detailImages: data.wpPost?.singleService?.servicectaImages?.map((e) => {
              return e?.ctaImage?.localFile?.publicURL
            }),
            extra: data.wpPost?.singleService?.enableShowcase,
            extraData: {
              title: data.wpPost?.singleService?.showcase?.heading,
              body: [
                data.wpPost?.singleService?.showcase?.description,
                data.wpPost?.singleService?.showcase?.descriptionLine2,
              ],
              languages: data.wpPost?.singleService?.showcase?.dropdownValues?.map((e) => {
                console.log(e?.videoLink)
                return { name: e?.dropdownHeading, imgUrl: e?.videoLink, imgTitle: e?.videoTitle }
              }),
            },
          },
          details: data.wpPost?.singleService?.serviceDescriptionSections?.map((e) => {
            return {
              title: e?.subheading,
              body: e?.description,
              img: e?.image?.localFile?.publicURL,
              points: e?.bulletPoints?.map((f) => {
                return f?.point
              }),
            }
          }),
          ProvidedTo: {
            mainHeading: "WE'RE TRUSTED BY",
            customers: data.wpPost?.singleService?.servicetrustedBy?.map((e) => {
              return e?.trustedByImages?.localFile?.publicURL
            }),
            subHeading1: "WE'VE WORKED ON",
            subHeading2: 'WHICH ALLOWS US TO PROVIDE YOU WITH A WORLD CLASS SERVICE',
            workedOnImages: data.wpPost?.singleService?.serviceworkedOn?.map((e) => {
              return e?.workedOnImage?.localFile?.publicURL
            }),
            detailImage:
              data.wpPost?.singleService?.servicetestimonial?.testimonialImage?.localFile
                ?.publicURL,
            detailHeading: data.wpPost?.singleService?.servicetestimonial?.testimonialMainText,
            detailBody: data.wpPost?.singleService?.servicetestimonial?.testimonialSubText,
          },
          bigLink: {
            head: data.wpPost?.singleService?.servicecontactus?.contactUsSubheading,
            title: data.wpPost?.singleService?.servicecontactus?.contactUsHeading,
            linkTitle: data.wpPost?.singleService?.servicecontactus?.contactUsLinkText,
            to: data.wpPost?.singleService?.servicecontactus?.contactUsLink,
            bgImg:
              data.wpPost?.singleService?.servicecontactus?.contactUsBackgroundImage?.localFile
                ?.publicURL,
          },
        }}
      />
    </Layout>
  )
}
export const query = graphql`
  query SingleServicePage($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      singleService {
        servicecontactus {
          contactUsBackgroundImage {
            localFile {
              publicURL
            }
          }
          contactUsHeading
          contactUsLinkText
          contactUsLink
          contactUsSubheading
        }
        ctaDescription
        ctaHeading
        servicectaImages {
          ctaImage {
            localFile {
              publicURL
            }
          }
        }
        ctaSubDescription
        ctaSubheading
        enableShowcase
        mainBackground {
          localFile {
            publicURL
          }
        }
        mainHeading
        mainSubheading
        serviceDescriptionSections {
          description
          subheading
          bulletPoints {
            point
          }
          image {
            localFile {
              publicURL
            }
          }
        }
        showcase {
          description
          descriptionLine2
          heading
          dropdownValues {
            dropdownHeading
            videoTitle
            videoLink {
              link
            }
          }
        }
        servicetestimonial {
          fieldGroupName
          testimonialImage {
            localFile {
              publicURL
            }
          }
          testimonialMainText
          testimonialSubText
        }
        servicetrustedBy {
          trustedByImages {
            localFile {
              publicURL
            }
          }
        }
        serviceworkedOn {
          workedOnImage {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
