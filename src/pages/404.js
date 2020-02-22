import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/ui/section/section'
import Link from '../components/link/link'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Section>
      <h1>NOT FOUND</h1>
      <p>We didn't find the page you were looking for.</p>
      <Link to='/'>Go to home page</Link>
    </Section>
  </Layout>
)

export default NotFoundPage
