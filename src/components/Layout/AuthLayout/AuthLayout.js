import React from 'react'
import { Route } from 'react-router-dom'

import classes from './AuthLayout.module.sass'

const authLayout = props => {
  return (
    <div className={classes.AuthLayout + " bg-blue"}>
      <div className="container">
        <div className="card align-top">
          <div className="card-body">
            <Route {...props} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default authLayout

