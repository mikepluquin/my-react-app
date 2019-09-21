import React from 'react'

import Spinner from '../../UI/Spinner/Spinner'

const loadingLayout = (props) => {
  return (
    <div id="layout" className="bg-purple">
      <main>
        <div className="container">
          <Spinner size="lg" color="light" type="grow" />
        </div>
      </main>
    </div>
  )
}

export default loadingLayout

