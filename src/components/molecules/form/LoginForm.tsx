import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { globalContext } from '../../../context/GlobalContextProvider'
import Button from '../../atoms/Button'
import InputTag from '../../atoms/InputTag'

export default function LoginForm() {
  const { setLoginRequest } = useContext(globalContext)
  return (
    <form action="post" className="h-fit">
      <div className="flex flex-col gap-2">
        <label htmlFor="login">Login</label>
        <InputTag type="text" variant="login" className="" id="login" name="login" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <InputTag type="text" variant="login" className="" id="password" name="password" />
      </div>
      <div className="flex items-baseline justify-between gap-2 max-sm:flex-col">
        <Button variant="login" className=" max-sm:w-full max-sm:text-sm">
          Login
        </Button>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault()
            setLoginRequest('forgotPassword')
          }}
          className="underline"
        >
          <h6>Forgot Password?</h6>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <InputTag
          className="focus:ring-red-500"
          variant="login"
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
        />
        <label htmlFor="rememberMe">
          <h6>Remember Me</h6>
        </label>
      </div>
      <div className="mx-auto mt-3 flex w-fit items-center gap-5 max-sm:flex-col md:mt-10">
        <h6 className="italic">New to Global Voice Media?</h6>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault()
            setLoginRequest('signup')
          }}
          className="underline "
        >
          <h6>Create Account</h6>
        </Link>
      </div>
    </form>
  )
}
