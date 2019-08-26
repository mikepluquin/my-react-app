import React from 'react'
import { Route } from 'react-router-dom'

const defaultLayout = props => {
  return (
    <div>
      <Route {...props} />
    </div>
  )
}

export default defaultLayout

