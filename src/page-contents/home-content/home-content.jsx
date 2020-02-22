import React from 'react'

import Intro from './sections/intro'
import FeaturedEvent from './sections/featured-event'
import About from './sections/about'
import Contact from './sections/contact'

const HomeContent = () => {
  return (
    <>
      <Intro />
      <FeaturedEvent />
      <About />
      <Contact />
    </>
  )
}

export default HomeContent
