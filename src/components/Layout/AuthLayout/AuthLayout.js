import React from 'react'
import { Route } from 'react-router-dom'

import classes from './AuthLayout.module.sass'

const authLayout = ({ component: MatchComponent, ...remainingProps }) => {
  return (
    <main>
      <Route
        {...remainingProps}
        render={matchProps => (
          <div id="layout" className={classes.AuthLayout + " bg-purple"}>
            <div className="container">
              <div className="card align-top">
                <div className="card-body">
                  <MatchComponent {...matchProps} />
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </main>
  )
}

export default authLayout

