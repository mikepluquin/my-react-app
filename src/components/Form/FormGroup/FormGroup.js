import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Control from './Control/Control'
import Label from './Label/Label'
import Errors from './Errors/Errors'

const formGroup = props => {
  const classesName = [
    "form-group"
  ]

  const hasErrors = props.control.errors.length > 0

  return (
    <div className={classesName.join(' ')}>
      {
        props.control.label
          ? <Label
            invalid={hasErrors}
            valid={props.control.valid}
            required={props.control.required}
            for={props.control.name}
          >
            {props.control.label}
          </Label>
          : null
      }

      <Control
        invalid={hasErrors}
        {...props.control}
        name={props.name}
        disabled={props.disabled}
        changed={(name, value) => props.changed(name, value)} />

      {
        hasErrors
          ? <Errors messages={props.control.errors} />
          : null
      }
    </div>
  )
}

formGroup.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  changed: PropTypes.func
}

export default memo(formGroup)