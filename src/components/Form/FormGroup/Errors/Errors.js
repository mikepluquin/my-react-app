import React, { memo } from 'react'
import PropTypes from 'prop-types'

const errors = props => {
  return (
    <small className="text-danger">
      {props.messages.join(', ')}
    </small>
  )
}

errors.propTypes = {
  messages: PropTypes.array
}

export default memo(errors)