import React, { memo } from 'react'
import PropTypes from 'prop-types'

const button = props => {
  const classesName = [
    "btn"
  ]

  if(props.size){
    classesName.push('btn-' + props.size)
  }
  if(props.color){
    classesName.push('btn-' + props.color)
  }

  return (
    <button
      className={classesName.join(' ')}
      type={props.type}
      disabled={props.disabled}>
      {props.children}
    </button>
  )
}

button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

button.defaultProps = {
  color: "primary"
};

export default memo(button)