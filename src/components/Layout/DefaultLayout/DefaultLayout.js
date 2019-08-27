import React from 'react'
import { Route } from 'react-router-dom'

const defaultLayout = ({ component: MatchComponent, ...remainingProps }) => {
  return (
    <Route
      {...remainingProps}
      render={matchProps => (
        <MatchComponent {...matchProps} />
      )}
    />
  )
}

export default defaultLayout

