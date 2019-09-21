import React, { Component, Suspense, lazy } from 'react';
import { Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import LoadingLayout from './components/Layout/LoadingLayout/LoadingLayout'
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout'
import AuthLayout from './components/Layout/AuthLayout/AuthLayout'
import ErrorBoundary from './errorBoundary'

const Login = lazy(() => import('./containers/Login/Login'))
const Register = lazy(() => import('./containers/Register/Register'))
const Home = lazy(() => import('./containers/Home/Home'))

class App extends Component {
  render() {

    const logged = this.props.userId && this.props.token

    return (
      <ErrorBoundary>
        <Suspense fallback={<LoadingLayout />}>
          {/* different routes and redirect if logged or not */}
          {
            logged
              ? <Switch>
                <DefaultLayout exact path="/" component={Home} />
                <Redirect to="/" />
              </Switch>

              : <Switch>
                <AuthLayout exact path="/login" component={Login} />
                <AuthLayout exact path="/register" component={Register} />
                <Redirect to="/login" />
              </Switch>

          }
        </Suspense>
      </ErrorBoundary>
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
