import React from 'react'

import Section from '../../../components/ui/section/section'
import Heading from '../../../components/ui/heading/heading'
import WTMImage from '../../../components/wtm-featured-image'
import Card from '../../../components/ui/card/card'

const FeaturedEvent = () => {
  return (
    <Section id='IWD19'>
      <Card
        Hero={({ className }) => <WTMImage classes={className} />}
        title={
          <Heading>
            {`International `}
            <Heading as='span' color='secondary'>
              {`Women's `}
            </Heading>
            Day (IWD'20)
          </Heading>
        }
        link='https://www.meetup.com/GDGCasablanca/events/268661463/'
        details={[
          <>
            <i class='material-icons'>calendar_today</i>
            <span>March 8, 2020</span>
          </>,
          <>
            <i class='material-icons'>access_time</i>
            <span>9:00 AM to 5:00 PM (gmt+1)</span>
          </>,
          <>
            <i class='material-icons'>pin_drop</i>
            <span>Emsi Les Orangers, Casablanca</span>
          </>,
        ]}
      />
    </Section>
  )
}

export default FeaturedEvent
