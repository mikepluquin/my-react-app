import React from 'react'
import PropTypes from 'prop-types'

import FormGroup from './FormGroup/FormGroup'

import Button from '../../components/UI/Button/Button'

const form = props => {
  return (
    <form onSubmit={props.submitted}>
      {Object.keys(props.controls).map((name, index) => (
        <FormGroup
          key={index}
          name={name}
          control={props.controls[name]}
          changed={(name, value) => props.changed(name, value)} />
      ))}

      { props.submit ?
        <Button {...props.submit} type="submit">
          {props.submit.value}
        </Button> :
        null
      }
    </form>
  )
}

form.propTypes = {
  controls: PropTypes.object.isRequired,
  submit: PropTypes.object,
  submitted: PropTypes.func,
  changed: PropTypes.func
}

export default form 