import React from 'react'

import Section from '../ui/section/section'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <Section as='footer' classes={styles.footer}>
      <h1 className={styles.organizer}>WTM Casablanca</h1>
      <nav className={styles.links}>
        <a
          href='https://www.meetup.com/GDGCasablanca/'
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          Meetup
        </a>
        <a
          href='https://www.twitter.com/WTMCasablanca/'
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          Twitter
        </a>
        <a
          href='https://www.facebook.com/WTMCasablanca/'
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          Facebook
        </a>
        <a
          href='https://www.instagram.com/WTMCasablanca/'
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          Instagram
        </a>
      </nav>
      <div className={styles.copy}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </div>
    </Section>
  )
}

export default Footer
