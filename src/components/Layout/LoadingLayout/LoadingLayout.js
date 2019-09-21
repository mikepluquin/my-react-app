import React from 'react'

import Spinner from '../../UI/Spinner/Spinner'

const loadingLayout = (props) => {
  return (
    <div id="layout" className="bg-purple">
      <main>
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <Spinner size="xl" color="light" type="grow" />
        </div>
      </main>
    </div >
  )
}

export default loadingLayout

