import React, { memo } from 'react'
import PropTypes from 'prop-types'

const label = props => {
  const classesName = []

  if (props.invalid && !props.valid) {
    classesName.push('text-danger')
  }

  if (props.valid && !props.invalid) {
    classesName.push('text-success')
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
  valid: PropTypes.bool,
  for: PropTypes.string
}

export default memo(label)