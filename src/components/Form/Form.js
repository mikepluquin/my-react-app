import React, { memo } from 'react'
import PropTypes from 'prop-types'

import FormGroup from './FormGroup/FormGroup'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import Errors from './FormGroup/Errors/Errors'

const form = props => {
  const disabled = props.disabled
  const hasErrors = props.errors.length > 0
  return (
    <form onSubmit={props.submitted}>
      <fieldset disabled={disabled}>
        {
          hasErrors > 0
            ? <Errors messages={props.errors} />
            : null
        }

        {Object.keys(props.controls).map((name, index) => (
          <FormGroup
            key={index}
            name={name}
            control={props.controls[name]}
            disabled={disabled}
            changed={(name, value) => props.changed(name, value)} />
        ))}

        {
          props.submit
            ? <Button {...props.submit} type="submit">
              {
                props.loading
                  ? <Spinner
                    size="sm"
                  />
                  : props.submit.value
              }
            </Button>
            : null
        }
      </fieldset>
    </form>
  )
}

form.propTypes = {
  loading: PropTypes.bool,
  controls: PropTypes.object.isRequired,
  submit: PropTypes.object,
  errors: PropTypes.array,
  submitted: PropTypes.func,
  changed: PropTypes.func
}

export default memo(form)