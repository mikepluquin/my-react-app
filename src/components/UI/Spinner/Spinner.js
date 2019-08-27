import React from 'react'
import PropTypes from 'prop-types'

const spinner = props => {
  const classesName = [
    "spinner-border"
  ]

  if (props.size) {
    classesName.push('spinner-border-' + props.size)
  }

  return (
    <div
      className={classesName.join(' ')}
      role="status">
    </div>
  )
}

spinner.propTypes = {
  size: PropTypes.string,
}

export default spinner