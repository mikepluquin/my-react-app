import React from 'react'

const errorLayout = (props) => {
  return (
    <div id="layout" className="bg-purple">
      <main>
        <div className="min-vh-100 d-flex align-items-center justify-content-center text-light">
          <h1>
            <i className="fa fa-exclamation-triangle" />
            &nbsp;
            Oops, something went wrong !
            </h1>
        </div>
      </main>
    </div >
  )
}

export default errorLayout

