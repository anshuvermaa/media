import React, { useContext } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { IconContext } from 'react-icons'
import { RxCross2 } from 'react-icons/rx'

import { globalContext } from '../../context/GlobalContextProvider'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

export default function ExtendedNavbar() {
  const { extendedNavbar, setExtendedNavbar } = useContext(globalContext)
  const data = useStaticQuery(graphql`
    query NavBar {
      teamMembers: allWpPost(
        filter: { categories: { nodes: { elemMatch: { name: { eq: "Team Member Profile" } } } } }
      ) {
        nodes {
          slug
          title
        }
      }
      services: allWpPost(
        filter: { categories: { nodes: { elemMatch: { name: { eq: "Service" } } } } }
      ) {
        nodes {
          slug
          title
        }
      }
      technology: allWpPost(
        filter: { categories: { nodes: { elemMatch: { name: { eq: "Single Technology" } } } } }
      ) {
        nodes {
          slug
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <Wrapper className="absolute left-0 top-0 z-[25] h-fit w-[100vw] border-b-2 border-orange-500 bg-theme-black bg-opacity-50 backdrop-blur-lg">
      <Container className="relative mt-36 mb-1 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:gap-10">
        {extendedNavbar == 'services' && (
          <>
            <div>
              <h1 className={`text-base sm:text-lg md:text-2xl xl:w-[16rem]`}>SERVICES</h1>
            </div>
            <div className="flex h-full flex-col gap-1 md:gap-4">
              <Link
                to="/services/"
                className="font-bold hover:text-orange-500 max-md:text-sm"
                onClick={(e) => {
                  setExtendedNavbar('hidden')
                }}
              >
                Services
              </Link>
              {data.services.nodes.slice(0, 2).map((service: any) => (
                <Link
                  key={service.slug}
                  to={'/services/' + service.slug}
                  className="opacity-75 [transition:0.25s] hover:translate-x-5 hover:text-orange-500 max-sm:text-sm"
                  onClick={() => {
                    setExtendedNavbar('hidden')
                  }}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="flex h-full flex-col gap-1 md:gap-4">
              {data.services.nodes.slice(3,10).map((service: any) => (
                <Link
                  key={service.slug}
                  to={'/services/' + service.slug}
                  className="opacity-75 [transition:0.25s] hover:translate-x-5 hover:text-orange-500 max-sm:text-sm"
                  onClick={() => {
                    setExtendedNavbar('hidden')
                  }}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </>
        )}

        {extendedNavbar == 'technology' && (
          <>
            <div>
              <h1 className={`text-base sm:text-lg md:text-2xl xl:w-[16rem]`}>TECHNOLOGY</h1>
            </div>
            <div className="flex h-full flex-col gap-1 md:gap-4">
              <Link
                to="/technology/"
                className="font-bold hover:text-orange-500 max-md:text-sm"
                onClick={(e) => {
                  setExtendedNavbar('hidden')
                }}
              >
                Technology
              </Link>
              {data.technology.nodes.slice(0, 2).map((technology: any) => (
                <Link
                  key={technology.slug}
                  to={'/technology/' + technology.slug}
                  className="opacity-75 [transition:0.25s] hover:translate-x-5 hover:text-orange-500 max-sm:text-sm"
                  onClick={() => {
                    setExtendedNavbar('hidden')
                  }}
                >
                  {technology.title}
                </Link>
              ))}
            </div>
            <div className="flex h-full flex-col gap-1 md:gap-4">
              {data.technology.nodes.slice(3,10).map((technology: any) => (
                <Link
                  key={technology.slug}
                  to={'/services/' + technology.slug}
                  className="opacity-75 [transition:0.25s] hover:translate-x-5 hover:text-orange-500 max-sm:text-sm"
                  onClick={() => {
                    setExtendedNavbar('hidden')
                  }}
                >
                  {technology.title}
                </Link>
              ))}
            </div>
          </>
        )}

        {extendedNavbar == 'about' && (
          <>
            <div>
              <h1 className={`text-base sm:text-lg md:text-2xl xl:w-[16rem]`}>ABOUT</h1>
            </div>
            <div className="flex h-full flex-col gap-1 md:gap-4">
              <Link
                to="/aboutus/"
                className="font-bold hover:text-orange-500 max-md:text-sm"
                onClick={() => {
                  setExtendedNavbar('hidden')
                }}
              >
                About Us
              </Link>
              <Link
                to="/ourteam"
                className="opacity-75 [transition:0.25s] hover:translate-x-5 hover:text-orange-500 max-sm:text-sm"
                onClick={() => {
                  setExtendedNavbar('hidden')
                }}
              >
                Meet our Team
              </Link>
              <Link
                to="/joinus"
                className="opacity-75 [transition:0.25s] hover:translate-x-5 hover:text-orange-500 max-sm:text-sm"
                onClick={() => {
                  setExtendedNavbar('hidden')
                }}
              >
                Join our Network
              </Link>
            </div>
            <div className="flex h-full flex-col gap-1 md:gap-4">
              <Link
                to="/joinus/careers"
                className="opacity-75 [transition:0.25s] hover:translate-x-5 hover:text-orange-500 max-sm:text-sm"
                onClick={() => {
                  setExtendedNavbar('hidden')
                }}
              >
                Careers
              </Link>
              <Link
                to="/joinus/freelance"
                className="opacity-75 [transition:0.25s] hover:translate-x-5 hover:text-orange-500 max-sm:text-sm"
                onClick={() => {
                  setExtendedNavbar('hidden')
                }}
              >
                Freelancers
              </Link>
            </div>
          </>
        )}
        <div
          className="absolute right-0 top-0 text-orange-500"
          onClick={() => {
            setExtendedNavbar('hidden')
          }}
        >
          {/* <StaticImage src="../../images/ComponentImages/cross.png" alt="X" height={40} /> */}
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 15 15"
            className="cursor-pointer"
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="#f97316"
            ></path>
          </svg>
        </div>
      </Container>
    </Wrapper>
  )
}
