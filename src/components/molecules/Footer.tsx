import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { IconContext } from 'react-icons'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

import Data from '../../data/footer.json'
import Container from '../atoms/Container'
import HoverLink from '../atoms/HoverLink'

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-[10%]">
      <Container className="grid-rols-[min-content] grid grid-cols-1 gap-y-10 md:grid-cols-2 xl:grid-cols-[2fr_1fr_2fr] 2xl:grid-cols-[2fr_2fr_3fr_1fr]">
        <div className="flex flex-col gap-y-20">
          <StaticImage src="../../images/GVM_Logo_Dark.svg" alt="logo" />

          <HoverLink to="#" name={Data.email} />
        </div>
        <div className="flex w-full md:justify-center">
          <ul className="flex h-full w-fit flex-col items-start gap-0 md:gap-2">
            {Data.links?.map((e: any, ind: number) => (
              <li key={ind}>
                <Link to={e.to} className="text-sm font-medium  italic text-slate-800">
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h5 className="text-base font-medium italic text-slate-900">{Data.contact.title}</h5>
          <h6 className="mb-10 font-light text-slate-600">{Data.contact.body}</h6>
          <div className="flex justify-between border-b-[1px] border-b-black py-3">
            <input
              type="text"
              className="w-full border-0 placeholder:text-sm placeholder:font-medium"
              placeholder="Your Email"
            />
            <button type="button" className="font-medium text-orange-500">
              {Data.contact.button}
            </button>
          </div>
        </div>
        <div className="Logos col-span-full flex items-center justify-around gap-2 2xl:col-span-1 2xl:row-span-2 2xl:flex-col 2xl:justify-center">
          <IconContext.Provider value={{ color: '#1e293b', size: '50px' }}>
            <IoLogoLinkedin color="#1e293b" />
            <IoLogoInstagram />
            <IoLogoFacebook />
            <IoLogoTwitter />
          </IconContext.Provider>
        </div>
        <div className="self-center">
          <h6 className="text-black">{Data.rights}</h6>
        </div>
        <div className="md:col-span-2">
          <ul className="flex h-full flex-col items-center justify-around sm:flex-row">
            {Data.otherLinks?.map((e, ind) => (
              <li key={ind}>
                <Link to={e.to}>
                  <h6 className="text-black">{e.name}</h6>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
