import React from 'react'

import Section from '../../../components/ui/section/section'
import Text from '../../../components/ui/text/text'
import Heading from '../../../components/ui/heading/heading'
import Link from '../../../components/link/link'

const Contact = () => {
  return (
    <Section id='contact'>
      <Heading>Contact Us</Heading>
      <Text>
        {`For partnerships or press, please contact us via our email: `}
        <Link to='mailto:wtmcasa@gmail.com' external>
          wtmcasa@gmail.com
        </Link>
      </Text>
    </Section>
  )
}

export default Contact
