import React from 'react'
import PropTypes from 'prop-types'

const control = props => {
  const classesName = [
    "form-control"
  ]

  if (props.invalid) {
    classesName.push('is-invalid')
  }

  const dynamicControl = (
    <input
      className={classesName.join(' ')}
      value={props.value}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      disabled={props.disabled}
      onChange={(event) => props.changed(props.name, event.target.value)} />
  )

  return dynamicControl
}

control.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.array,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  changed: PropTypes.func,
}

export default control