import React from 'react'

import Section from '../../../components/ui/section/section'
import Link from '../../../components/link/link'
import Text from '../../../components/ui/text/text'
import Heading from '../../../components/ui/heading/heading'

const About = () => {
  return (
    <Section id='about'>
      <Heading>
        About&nbsp;
        <Heading as='span' color='secondary'>
          WTM&nbsp;
        </Heading>
        Casablanca
      </Heading>
      <Text>
        <Text as='span' weight='bold'>
          Women Techmakers&nbsp;
        </Text>
        is Google’s brand and global program for women in technology. Women
        Techmakers provides visibility, community, and resources for women in
        technology to drive innovation and participation in the field. Women
        Techmakers events are designed to promote an environment of inclusion
        for women in technology, as well as celebrate women leading the
        industry. We want to advance, grow, and celebrate women developers,
        designers, and technology entrepreneurs.
      </Text>
      <Text>
        <Text as='span' weight='bold'>
          Women Techmakers&nbsp;
        </Text>
        was founded by Googlers in 2012, including Megan Smith, former VP at
        Google[x] and current Chief Technology Officer of the United States. The
        program started as a once-a-year event for women in technology to
        connect and inspire one another, happening the night before Google I/O.
        In 2013 Women Techmakers became a global brand and program led by
        Natalie Villalobos, Google’s Women in Technology Advocate. In 2014,
        Women Techmakers hosted 125 events across 52 countries for International
        Women's Day, increased the participation of women at Google I/O from 8%
        in 2013 to 20% in 2014, and much more.
      </Text>
      <Text>
        <Text as='span' weight='bold'>
          WTM&nbsp;
        </Text>
        in integrated into the
        <Text as='span' weight='bold'>
          &nbsp;GDG community&nbsp;
        </Text>
        you can find more information about GDG Casablanca here:&nbsp;
        <Link to='https://www.meetup.com/GDGCasablanca/' external>
          meetup.com/GDGCasablanca
        </Link>
      </Text>
    </Section>
  )
}

export default About
