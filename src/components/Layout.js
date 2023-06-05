import React from 'react'
import MyFooter from './Footer'
import Navigation from './MyNav'

const Layout = ({children}) => { 
  return (
    <div>
      <>
        <Navigation/>
        {children} { }
        <MyFooter/>
      </>
    </div>
  )
}

export default Layout
