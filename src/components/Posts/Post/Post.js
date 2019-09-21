import React, { memo } from 'react'
import moment from 'moment'

const post = props => {
  return (
    <div className="card border-0 mt-3 mb-3">
      <div className="card-header bg-red text-light">
        {
          props.user
            ? <small>
              {props.user.username}
            </small>
            : null
        }
      </div>

      <div className="card-body">
        {props.body}
      </div>

      <div className="card-footer text-red">
        {
          props.likes
            ? <small>
              <span>{props.likes.length}</span>
              &nbsp;
              <i className="fa fa-thumbs-up"></i>
              <span className="pull-right">
                Posted at
              </span>
            </small>
            : null
        }
      </div>
    </div>
  )
}

export default memo(post)