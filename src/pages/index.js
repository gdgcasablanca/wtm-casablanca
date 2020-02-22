import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeContent from '../page-contents/home-content/home-content'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <HomeContent />
  </Layout>
)

export default IndexPage
