import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

const button = props => {
  const classesName = [
    "btn"
  ]

  if (props.size) {
    classesName.push('btn-' + props.size)
  }
  if (props.color) {
    classesName.push('btn-' + props.color)
  }

  return (
    <button
      className={classesName.join(' ')}
      type={props.type}
      disabled={props.disabled}>
      {
        props.animated ?
          <CSSTransitionGroup transitionName="btn-popped">
            <div key="0">
              {props.children}
            </div>
          </CSSTransitionGroup>
          : props.children
      }
    </button >
  )
}

button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  animated: PropTypes.bool,
  disabled: PropTypes.bool
}

button.defaultProps = {
  color: "primary"
};

export default memo(button)