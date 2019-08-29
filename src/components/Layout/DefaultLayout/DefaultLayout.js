import React from 'react'
import { Route } from 'react-router-dom'

const defaultLayout = ({ component: MatchComponent, ...remainingProps }) => {
  return (
    <div id="layout">
      <Route
        {...remainingProps}
        render={matchProps => (
          <MatchComponent {...matchProps} />
        )}
      />
    </div>
  )
}

export default defaultLayout

