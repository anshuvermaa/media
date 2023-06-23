import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { globalContext } from '../../../context/GlobalContextProvider'
import Button from '../../atoms/Button'
import InputTag from '../../atoms/InputTag'

export default function ForgotPassword() {
  const { setLoginRequest } = useContext(globalContext)
  return (
    <div className="">
      <h5 className="mb-5 text-xs md:mb-10">
        Please enter your email address and we will send you an email to reset your password
      </h5>

      <label htmlFor="email" className="my-3 sm:my-2">
        <h6 className="py-2 text-base	"> Email Address</h6>
      </label>
      <InputTag variant="login" type="text" name="email" id="email" className="w-full"></InputTag>
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div className="relative h-fit w-full">
          <Button
            variant="login"
            className="my-0 max-sm:w-full max-sm:text-sm"
            style={{ margin: '0px' }}
          >
            Reset Password
          </Button>
          <h6 className="z-20 translate-y-0.5 font-bold">
            You have been sent an email to reset your password
          </h6>
        </div>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault()
            setLoginRequest('login')
          }}
          className="whitespace-nowrap pt-2 underline"
        >
          <h6 className="font-medium">Back to Sign In</h6>
        </Link>
      </div>
    </div>
  )
}
