import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as authActionCreators from '../../store/actions/creators/auth'

class Auth extends Component {
  state = {
    email: null,
    password: null,
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }


  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.onAuth(this.state.email, this.state.password)
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <input type="email" placeholder="email" onChange={this.handleEmailChange}/>
        <input type="password" placeholder="password" onChange={this.handlePasswordChange}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(authActionCreators.authInit(email, password)),
  }
}

export default connect(null, mapDispatchToProps)(Auth)