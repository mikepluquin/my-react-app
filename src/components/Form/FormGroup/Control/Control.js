import React from 'react'
import classes from './Control.module.sass';
import PropTypes from 'prop-types'

const control = props => {
  const dynamicClasses = [
    classes.Control,
    "form-control"
  ]

  const dynamicControl = (
    <input
      className={dynamicClasses.join(' ')}
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
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  changed: PropTypes.func
}

export default control