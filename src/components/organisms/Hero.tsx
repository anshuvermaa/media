import React, { useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import { HiChevronUp } from 'react-icons/hi'

import { globalContext } from '../../context/GlobalContextProvider'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'
import ExtendedNavbar from '../molecules/ExtendedNavbar'
import Navbar from '../molecules/Navbar'

import LoginWindow from './LoginWindow'
export default function Hero({
  children,
  className,
  id,
  bgImg = '',
  head,
  body,
  links,
  style,
  bodyClassName,
  hideUpArraow,
}: React.PropsWithChildren<{
  className?: string
  id?: string
  bgImg?: any
  logo?: boolean
  head?: string | null
  body?: string | null
  links?: any
  style?: any
  bodyClassName?: any
  hideUpArraow?: boolean
}>) {
  const { loginRequest, extendedNavbar } = useContext(globalContext)
  useEffect(() => {
    console.log('Login Div Toggle')
  }, [loginRequest])
  useEffect(() => {
    console.log('Navbar Toggle')
  }, [extendedNavbar])
  return (
    <>
      {loginRequest != 'hidden' ? <LoginWindow /> : <></>}
      {extendedNavbar != 'hidden' ? <ExtendedNavbar /> : <></>}
      {!hideUpArraow && (
        <div
          className="fixed bottom-10 right-[5%] z-[25] flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-50 md:h-16 md:w-16"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <HiChevronUp className=" h-full w-full" />
        </div>
      )}
      <Wrapper
        className={` h-[100vh] w-full ` + className}
        style={{ backgroundImage: `url("${bgImg}")`, backgroundSize: 'cover', ...style }}
        id={id}
      >
        <Navbar loggedIn={false} className="absolute left-0 right-0 z-50" />
        <Container className="relative h-full">
          {body && (
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center  md:gap-3">
                <h1 className="w-fit pb-10 text-center text-xl uppercase leading-[100%] tracking-tighter md:text-3xl  xl:text-5xl">
                  {head}
                </h1>
                <h3
                  className={
                    'text-center text-white opacity-75 max-md:p-1 max-md:text-xs ' + bodyClassName
                  }
                >
                  {body}
                </h3>
              </div>
              {links && (
                <div className="absolute left-0 bottom-14 flex h-fit w-full justify-start">
                  <ul className="font-neutral flex w-full flex-col gap-2 md:flex-row md:justify-between">
                    {links?.map((e: any, i: any) => {
                      return (
                        <Link
                          key={i}
                          to={`${e.redirectUrl}`}
                          className="whitespace-nowrap font-black uppercase text-slate-300 hover:text-white"
                        >
                          {e.serviceType}
                        </Link>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          )}
          {children}
        </Container>
      </Wrapper>
    </>
  )
}
