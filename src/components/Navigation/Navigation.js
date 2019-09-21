import React, { memo } from 'react'

import NavigationItem from './NavigationItem/NavigationItem'

const navigation = props => {
  return (
    <nav className="navbar bg-red text-light">
      <span className="navbar-brand">
        M
      </span>
    </nav>
  )
}

export default memo(navigation)