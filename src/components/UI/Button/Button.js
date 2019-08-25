import React from 'react'

import classes from './Button.module.sass';

const button = props => {
  const dynamicClasses = [
    classes.Button,
    "btn",
    "btn-light"
  ]

  return (
    <button
      className={dynamicClasses.join(' ')}
      type={props.type}
      disabled={props.disabled}>
      {props.children}
    </button>
  )
}

export default button