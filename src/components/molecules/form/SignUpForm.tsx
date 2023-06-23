import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { globalContext } from '../../../context/GlobalContextProvider'
import Button from '../../atoms/Button'
import InputTag from '../../atoms/InputTag'

export default function SignUpForm() {
  const { setLoginRequest } = useContext(globalContext)
  return (
    <form action="post" className="mt-2 flex h-fit flex-col">
      <div className="flex h-fit flex-col gap-2">
        <InputTag
          type="text"
          variant="login"
          className=""
          id="login"
          name="login"
          placeholder="Email"
        />
        <InputTag
          type="text"
          variant="login"
          className=""
          id="username"
          name="username"
          placeholder="Username"
        />
        <InputTag
          type="password"
          variant="login"
          className=""
          id="password"
          name="password"
          placeholder="Password"
        />
        <InputTag
          type="password"
          variant="login"
          className=""
          id="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex items-baseline justify-between gap-1 max-sm:flex-col">
        <Button variant="login" className="max-md:text-sm">
          Create Your Account
        </Button>

        <Link
          to="#"
          className="flex-nowrap self-baseline underline"
          onClick={(e) => {
            e.preventDefault()
            setLoginRequest('login')
          }}
        >
          <h6 className="text-xs font-semibold">Have an account?</h6>
        </Link>
      </div>
      <h6 className=" flex flex-col pt-2">
        <span className="text-[80%] opacity-75">By creating an Account you agree to our </span>
        <span className="text-[80%] opacity-75">Terms of Service and Privacy Policy</span>
      </h6>
    </form>
  )
}
