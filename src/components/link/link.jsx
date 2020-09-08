import cx from 'classnames'
import { Link as GtLink } from 'gatsby'
import React from 'react'

import styles from './link.module.css'

const Link = ({ label, children, to, external, classes, activeClassName }) => {
  const content = label || children
  const allClasses = cx(styles.link, classes)

  if (external) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noopener noreferrer'
        className={allClasses}
      >
        {content}
      </a>
    )
  }

  return (
    <GtLink to={to} className={allClasses} activeClassName={activeClassName}>
      {content}
    </GtLink>
  )
}

export default Link
