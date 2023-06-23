import React, { useContext } from 'react'

// import globalContext from '../context/globalContext'
import GlobalContextProvider, { globalContext } from '../context/GlobalContextProvider'

import LoginWindow from './organisms/LoginWindow'

export default function Layout({ children }: React.PropsWithChildren) {
  const { loginRequest } = useContext(globalContext)
  return (
    <>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </>
  )
}
