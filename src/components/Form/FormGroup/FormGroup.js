import React from 'react'
import PropTypes from 'prop-types'

import Control from './Control/Control'
import Label from './Label/Label'
import classes from './FormGroup.module.sass';

const formGroup = props => {
  const dynamicClasses = [
    classes.formGroup,
    "form-group"
  ]

  return (
    <div className={dynamicClasses.join(' ')}>
      <Label
        required={props.control.required}
        hidden={!props.control.hasLabel}
        for={props.control.name}
      >
        {props.control.label}
      </Label>

      <Control
        {...props.control}
        name={props.name}
        changed={(name, value) => props.changed(name, value)} />
    </div>
  )
}

formGroup.propTypes = {
  control: PropTypes.object.isRequired
}

export default formGroup