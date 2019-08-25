import React from 'react'

const label = props => {
  let dynamicLabel = null
  if (!props.hidden) {
    dynamicLabel = (
      <label
        htmlFor={props.for}>
        {props.children}
      </label>
    )
  }

  return dynamicLabel
}

export default label