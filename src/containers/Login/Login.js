import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fromJS } from 'immutable'

import Form from '../../components/Form/Form'
import * as actionCreators from '../../store/auth/actionCreators'

class Login extends Component {
  state = {
    form: {
      controls: {
        email: {
          type: "email",
          placeholder: "your email",
          label: "Email",
          required: true,
          value: '',
          errors: [],
        },
        password: {
          type: "password",
          placeholder: "your password",
          label: "Password",
          required: true,
          value: '',
          errors: []
        }
      },
      submit: {
        value: "Login",
        color: "red",
        size: "block"
      },
      errors: [],
      loading: false
    }
  }

  handleFormChange = (name, value) => {
    const updatedForm = fromJS(this.state.form)
      .setIn(['controls', name, 'value'], value)
      .toJS()

    this.setState({
      form: updatedForm
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    const attributes = {}
    Object.keys(this.state.form.controls).forEach((obj) => {
      attributes[obj] = this.state.form.controls[obj].value
    })

    new Promise((resolve, reject) => {
      this.handleLoginStarted()
      this.props.onLogin({
        attributes: attributes,
        resolve: resolve,
        reject: reject
      })

    }).then(() => {
      this.handleLoginDone()

    }).catch((payload) => {
      this.handleLoginDone(payload)
    })
  }

  handleLoginStarted = () => {
    const updatedForm = fromJS(this.state.form)
      .set('loading', true)
      .set('disabled', true)
      .toJS()

    this.setState({
      form: updatedForm
    })
  }

  handleLoginDone = (payload = null) => {
    const errors = payload && payload.errors ? payload.errors : []
    const updatedForm = fromJS(this.state.form)
      .set('loading', false)
      .set('errors', errors)
      .toJS()

    this.setState({
      form: updatedForm
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Form
            controls={this.state.form.controls}
            errors={this.state.form.errors}
            submitted={this.handleFormSubmit}
            changed={this.handleFormChange}
            submit={this.state.form.submit}
            loading={this.state.form.loading} />

          <NavLink
            exact
            to="/register"
            className="text-center"
          >
            New to the app ? Register now
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (payload) => dispatch(actionCreators.authLoginInit(payload))
  }
}

Login.propTypes = {
  loading: PropTypes.bool
}

export default connect(null, mapDispatchToProps)(Login)