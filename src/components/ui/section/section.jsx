import cx from 'classnames'
import React from 'react'

import styles from './section.module.css'

const Section = ({ as, classes, id, children }) => {
  const Comp = as || 'section'

  return (
    <Comp className={cx(styles.section, classes)} id={id}>
      <div className='container'>{children}</div>
    </Comp>
  )
}

export default Section
