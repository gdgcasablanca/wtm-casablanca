import cx from 'classnames'
import React from 'react'

import Link from '../link/link'

import wtmLogo from '../../images/logo-wtm.svg'
import gdgLogo from '../../images/logo-gdg.svg'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className='container'>
          <Link to='/' classes={cx(styles.logo, styles.logoPrimary)}>
            <img src={wtmLogo} alt='WTM Casablanca' />
          </Link>

          <div className={styles.navLinks}>
            <a href='#intro'>Home</a>
            <a href='#IWD19'>IWD'20</a>
            <a href='#about'>About</a>
            {/* <a href="#!">Team</a> */}
            <a href='#contact'>Contact</a>
          </div>

          <Link
            to='https://gdgcasablanca.com'
            classes={cx(styles.logo, styles.logoSecondary)}
            external
          >
            <img src={gdgLogo} alt='GDG Casablanca. Be a hero. Be a GDG.' />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
