import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from '../../components/Form/Form'
import * as actionCreators from '../../store/actions/creators/auth'

class Login extends Component {
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
    this.props.onLogin(
      this.state.controls.email.value,
      this.state.controls.password.value
    )
  }

  render() {
    const submit = {
      value: "Login",
      color: "primary",
      size: "block"
    }

    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Form
            classesName={["relative-horizontal-center", "d-inline-block"]}
            controls={this.state.controls}
            submitted={this.handleFormSubmit}
            changed={this.handleFormChange}
            submit={submit} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (email, password, passwordConfirmation) => dispatch(actionCreators.authLoginInit(email, password, passwordConfirmation)),
  }
}

export default connect(null, mapDispatchToProps)(Login)