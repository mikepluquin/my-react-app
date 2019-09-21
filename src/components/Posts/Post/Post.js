import React, { memo } from 'react'

const post = props => {
  return(
    <div>
      {props.body}
    </div>
  )
}

export default memo(post)