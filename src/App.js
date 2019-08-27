import React, { Component, Fragment } from 'react';
import { Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import AuthLayout from './components/Layout/AuthLayout/AuthLayout'
// import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout'

class App extends Component {
  render() {

    const logged = this.props.userId && this.props.token

    return (
      <Switch>
        {/* different routes and redirect if logged or not */}
        { 
          logged ?
            <Fragment>
              <Redirect to="/" />
            </Fragment> :

            <Fragment>
              <AuthLayout exact path="/login" component={Login} />
              <AuthLayout exact path="/register" component={Register} />
              <Redirect to="/login" />
            </Fragment>
        }
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(withRouter(App));
