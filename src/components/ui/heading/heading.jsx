import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './heading.module.css'

const Heading = ({ as, color = colorTypes[0], children }) => {
  const Comp = as || 'h1'

  return (
    <Comp
      className={cx(styles.heading, {
        [styles[color]]: color,
      })}
    >
      {children}
    </Comp>
  )
}

const reactElType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.node,
  PropTypes.element,
])

export const colorTypes = ['default', 'primary', 'secondary']

Heading.propTypes = {
  as: reactElType,
  children: reactElType,
  color: PropTypes.oneOf(colorTypes),
}

export default Heading
