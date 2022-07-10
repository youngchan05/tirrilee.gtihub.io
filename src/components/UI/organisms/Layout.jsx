import React from 'react'
import Footer from '../molecules/Footer'
import Hedaer from '../molecules/Hedaer'

function Layout({activeName}) {
  return (
    <>
        <Hedaer activeName={activeName}/>
        <Footer/>
    </>
  )
}

export default Layout