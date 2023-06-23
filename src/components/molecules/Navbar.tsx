import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { globalContext } from '../../context/GlobalContextProvider'
import Button from '../atoms/Button'
import Container from '../atoms/Container'

export default function Navbar({
  loggedIn = false,
  className = '',
}: React.PropsWithoutRef<{ loggedIn?: boolean; className?: string }>) {
  const { loginRequest, setLoginRequest, setExtendedNavbar, extendedNavbar } =
    useContext(globalContext)
  const updateExtendedNavbar = (str: string) => {
    if (str == extendedNavbar) setExtendedNavbar('hidden')
    else setExtendedNavbar(str)
  }
  return (
    <>
      <Container className={`h-36 ${className}`}>
        <nav className="flex h-full w-full flex-col-reverse items-center justify-center gap-y-2 gap-x-10 pb-5 sm:pb-10 md:justify-around md:pb-0 lg:flex-row lg:justify-between">
          <div className="flex justify-between gap-3 sm:gap-10 md:gap-20">
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault()
                updateExtendedNavbar('services')
              }}
              className={`flex justify-center text-xs font-light hover:text-orange-500 md:text-base ${
                extendedNavbar == 'services' && 'text-orange-500'
              }`}
            >
              Services
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault()
                updateExtendedNavbar('technology')
              }}
              className={`flex justify-center text-xs font-light hover:text-orange-500 md:text-base ${
                extendedNavbar == 'technology' && 'text-orange-500'
              }`}
            >
              Technology
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault()
                updateExtendedNavbar('about')
              }}
              className={`flex justify-center text-xs font-light hover:text-orange-500 md:text-base ${
                extendedNavbar == 'about' && 'text-orange-500'
              }`}
            >
              About
            </Link>
          </div>
          <div className="flex h-fit flex-col items-center justify-around gap-y-2 gap-x-10 md:flex-row lg:flex-col">
            <div className="flex gap-4 md:gap-8 lg:gap-12">
              <Link to="/joinus" className="text-xs font-light hover:text-orange-500 md:text-base">
                Join Us
              </Link>
              <span
                className="cursor-pointer text-xs font-light hover:text-orange-500 md:text-base"
                onClick={(e) => {
                  e.preventDefault()
                  setLoginRequest('login')
                }}
              >
                Login
              </span>
              <Link to="#" className="text-xs font-light hover:text-orange-500 md:text-base">
                EN
              </Link>
            </div>
            <div className="flex h-fit justify-end gap-2 max-sm:flex-col max-sm:items-center">
              <Link to="/contactus">
                <Button variant="normal" className="text-xs max-sm:m-[0px] xl:text-base">
                  Talk to an expert
                </Button>
              </Link>
              {!loggedIn && (
                <Button
                  variant="normal"
                  className="text-xs max-sm:m-[0px] xl:text-base"
                  onClick={() => {
                    setLoginRequest('signup')
                  }}
                >
                  Sign Up
                </Button>
              )}
            </div>
          </div>
        </nav>
      </Container>
    </>
  )
}
