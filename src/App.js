import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import Auth from './containers/Auth/Auth'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Auth} />
        {/* if no route match, then redirect to login */}
        <Redirect to="/login" />
      </Switch>
    )
  }
}

export default withRouter(App);
