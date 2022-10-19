import React from 'react'
import { NavBar, Footer, BottomFooter } from './';

const Layout = ({children}) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <BottomFooter />
    </>
  )
}

export default Layout