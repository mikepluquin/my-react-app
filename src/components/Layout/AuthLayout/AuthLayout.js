import React from 'react'
import { Route } from 'react-router-dom'

import classes from './AuthLayout.module.sass'

const authLayout = ({ component: MatchComponent, ...remainingProps }) => {
  return (
    <Route
      {...remainingProps}
      render={matchProps => (
        <div className={classes.AuthLayout + " bg-blue"}>
          <div className="container">
            <div className="card align-top">
              <div className="card-body">
                <MatchComponent {...matchProps}/>
              </div>
            </div>
          </div>
        </div>

      )}
    />
  )
}

export default authLayout

