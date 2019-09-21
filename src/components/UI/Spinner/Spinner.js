import React, { memo } from 'react'
import PropTypes from 'prop-types'

const spinner = props => {
  const classesName = []
  if (props.type) {
    classesName.push('spinner-' + props.type)
  }
  if (props.size) {
    classesName.push('spinner-' + props.type + '-' + props.size)
  }
  if (props.color) {
    classesName.push('text-' + props.color)
  }

  return (
    <div
      className={classesName.join(' ')}
      role="status">
    </div>
  )
}

spinner.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string
}

spinner.defaultProps = {
  type: "border"
};

export default memo(spinner)