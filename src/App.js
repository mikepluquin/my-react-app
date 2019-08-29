import React, { Component, Fragment, Suspense, lazy } from 'react';
import { Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// import Login from './containers/Login/Login'
import LoadingLayout from './components/Layout/LoadingLayout/LoadingLayout'
import AuthLayout from './components/Layout/AuthLayout/AuthLayout'
// import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout'
const Login = lazy(() => import('./containers/Login/Login'))
const Register = lazy(() => import('./containers/Register/Register'))

class App extends Component {
  render() {

    const logged = this.props.userId && this.props.token

    return (
      <Suspense fallback={<LoadingLayout />}>
        <Switch>
          {/* different routes and redirect if logged or not */}
          {
            logged ?
              <Fragment>
                <AuthLayout exact path="/login" component={Login} />
                <Redirect to="/login" />
              </Fragment> :

              <Fragment>
                <AuthLayout exact path="/login" component={Login} />
                <AuthLayout exact path="/register" component={Register} />
                <Redirect to="/login" />
              </Fragment>
          }
        </Switch>
      </Suspense>
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
