import React, { memo } from 'react'

const errors = props => {

  return(
    <small className="text-danger">
      {props.messages.join(', ')}
    </small>
  )
}

export default memo(errors)