import React, { createContext, useState } from 'react'

interface LoginContextType {
  loginRequest: string
  setLoginRequest: (loginRequest: string) => void
  extendedNavbar: string
  setExtendedNavbar: (loginRequest: string) => void
}

export const globalContext = createContext<LoginContextType>({
  loginRequest: 'hidden',
  setLoginRequest: () => {
    console.log('Error')
  },
  extendedNavbar: 'hidden',
  setExtendedNavbar: () => {
    console.log('Error')
  },
})

const GlobalContextProvider = ({ children }: React.PropsWithChildren) => {
  const [loginRequest, setLoginRequest] = useState<string>('hidden')
  const [extendedNavbar, setExtendedNavbar] = useState<string>('hidden')
  const contextValue: LoginContextType = {
    loginRequest,
    setLoginRequest,
    extendedNavbar,
    setExtendedNavbar,
  }

  return <globalContext.Provider value={contextValue}>{children}</globalContext.Provider>
}
export default GlobalContextProvider
