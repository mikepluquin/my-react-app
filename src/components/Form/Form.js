import React from 'react'
import PropTypes from 'prop-types'

import FormGroup from './FormGroup/FormGroup'
import Button from '../UI/Button/Button'

const form = props => {
  return (
    <form
      onSubmit={props.submitted}>
      {Object.keys(props.controls).map((name, index) => (
        <FormGroup
          key={index}
          name={name}
          control={props.controls[name]}
          changed={(name, value) => props.changed(name, value)} />
      ))}

      <Button type="submit">
        {props.submit.value}
      </Button>
    </form>
  )
}

form.propTypes = {
  controls: PropTypes.object.isRequired
}

export default form 