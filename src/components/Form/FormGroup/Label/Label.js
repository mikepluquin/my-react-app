import React, { memo } from 'react'
import PropTypes from 'prop-types'

const label = props => {
  const classesName = []

  if (props.invalid) {
    classesName.push('text-danger')
  }

  return (
    <label
      className={classesName.join(' ')}
      htmlFor={props.for}>
      {props.children}
    </label>
  )
}

label.propTypes = {
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  for: PropTypes.string
}

export default memo(label)