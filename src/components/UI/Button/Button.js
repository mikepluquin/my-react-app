import React from 'react'

const button = props => {
  const dynamicClasses = [
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