import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const AboutLayout = ({ children }) => {
  return (
    <div id="wrap">
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default AboutLayout;