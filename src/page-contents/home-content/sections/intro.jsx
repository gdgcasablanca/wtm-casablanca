import React from 'react'

import Section from '../../../components/ui/section/section'
import Text from '../../../components/ui/text/text'
import Button from '../../../components/ui/button/button'
import Heading from '../../../components/ui/heading/heading'

const Intro = () => {
  return (
    <Section id='intro'>
      <Heading>
        <Heading as='div' color='secondary'>
          WTM Casablanca.
        </Heading>
        Connect. Create. Celebrate.
      </Heading>
      <Text>
        Google's Women Techmakers program provides visibility, community, and
        resources for women in technology.
      </Text>
      <Text color='grey' size='sm'>
        #WTMCasablanca &nbsp; #GDGCasablanca &nbsp; #WTM &nbsp; #GDG
      </Text>
      <Button
        as='a'
        href='https://www.meetup.com/GDGCasablanca/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Check Our Meetup Page
      </Button>
    </Section>
  )
}

export default Intro
