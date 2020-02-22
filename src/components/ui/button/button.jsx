import React from 'react'

import styles from './button.module.css'

const Button = ({ children, label, as, onClick, ...otherProps }) => {
  const Comp = as || 'button'

  return (
    <Comp onClick={onClick} className={styles.button} {...otherProps}>
      {label || children}
    </Comp>
  )
}

export default Button
