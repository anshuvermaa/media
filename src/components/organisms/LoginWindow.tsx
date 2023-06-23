import React, { useContext } from 'react'

import { globalContext } from '../../context/GlobalContextProvider'
import ForgotPassword from '../molecules/form/ForgotPassword'
import LoginForm from '../molecules/form/LoginForm'
import LoginFormTemplate from '../molecules/form/LoginFormTemplate'
import SignUpForm from '../molecules/form/SignUpForm'

export default function LoginWindow() {
  const { loginRequest } = useContext(globalContext)
  return (
    <LoginFormTemplate>
      {loginRequest == 'login' && <LoginForm />}
      {loginRequest == 'signup' && <SignUpForm />}
      {loginRequest == 'forgotPassword' && <ForgotPassword />}
    </LoginFormTemplate>
  )
}
