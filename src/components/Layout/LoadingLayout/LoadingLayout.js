import React from 'react'

import Spinner from '../../UI/Spinner/Spinner'

const loadingLayout = (props) => {
  return (
    <div id="layout" className="bg-blue">
      <div className="container">
        <Spinner size="lg" color="light" type="grow"/>
      </div>
    </div>
  )
}

export default loadingLayout

