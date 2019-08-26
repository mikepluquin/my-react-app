import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from '../../components/Form/Form'
import Card from '../../components/UI/Card/Card'
import * as actionCreators from '../../store/actions/creators/auth'

class Auth extends Component {
  state = {
    controls: {
      email: {
        type: "email",
        placeholder: "Your email",
        required: true,
        hasLabel: false,
        value: ''
      },
      password: {
        type: "password",
        placeholder: "Your password",
        required: true,
        hasLabel: false,
        value: ''
      }
    }
  }

  handleFormChange = (name, value) => {
    const controls = this.state.controls
    const control = controls[name]

    const updatedControl = {
      ...control,
      value: value
    }

    const updatedControls = {
      ...controls,
      [name]: updatedControl
    }

    this.setState({
      controls: updatedControls
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value
    )
  }

  render() {
    const submit = {
      value: "Login"
    }

    return (
      <div className="container">
        <Card>
          <Form
            controls={this.state.controls}
            submitted={this.handleFormSubmit}
            changed={this.handleFormChange}
            submit={submit} />
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actionCreators.authInit(email, password)),
  }
}

export default connect(null, mapDispatchToProps)(Auth)