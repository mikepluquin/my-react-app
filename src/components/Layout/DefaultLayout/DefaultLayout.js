import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Header from '../../../containers/Header/Header'

const defaultLayout = ({ component: MatchComponent, ...remainingProps }) => {
  return (
    <div id="layout" className="bg-purple">
      <Fragment>
        <Header />
        <main>
          <Route
            {...remainingProps}
            render={matchProps => (
              <MatchComponent {...matchProps} />
            )}
          />
        </main>
      </Fragment>
    </div>
  )
}

export default defaultLayout

