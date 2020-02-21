import cx from 'classnames'
import { Link } from 'gatsby'

import React from 'react'

import wtmLogo from '../../images/logo-wtm.svg'
import gdgLogo from '../../images/logo-gdg.svg'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className='container'>
          <Link to='/' className={cx(styles.logo, styles.logoPrimary)}>
            <img src={wtmLogo} alt='WTM Casablanca' />
          </Link>

          <div className={styles.navLinks}>
            <a href='#home'>Home</a>
            <a href='#IWD19'>IWD'20</a>
            <a href='#about'>About</a>
            {/* <a href="#!">Team</a> */}
            <a href='#contact'>Contact</a>
          </div>

          <a
            href='https://gdgcasablanca.com'
            className={cx(styles.logo, styles.logoSecondary)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={gdgLogo} alt='GDG Casablanca. Be a hero. Be a GDG.' />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
