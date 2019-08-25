import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Auth from './containers/Auth/Auth'

class App extends Component {
  render() {
    let routes = (
      <Switch>
        {/* if no route match, then redirect to homepage */}
        <Redirect to="/" />
      </Switch>

    )

    const logged = this.props.userId && this.props.token
    if (!logged) {
      routes = (
        <Switch>
          <Route exact path="/login" component={Auth} />
          {/* if no route match, then redirect to login */}
          <Redirect to="/login" />
        </Switch>
      )
    }

    return (
      <Fragment>
        {routes}
      </Fragment>
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
