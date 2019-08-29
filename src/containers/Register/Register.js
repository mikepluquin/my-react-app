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
        },
        passwordConfirmation: {
          type: "password",
          placeholder: "confirm your password",
          label: "Password confirmation",
          required: true,
          value: '',
          errors: [],
        },
        firstName: {
          type: "text",
          placeholder: "your first name",
          label: "First name",
          required: true,
          value: '',
          errors: [],
        },
        lastName: {
          type: "text",
          placeholder: "your last name",
          label: "Last name",
          required: true,
          value: '',
          errors: [],
        },
        bornDate: {
          type: "text",
          placeholder: "your born date",
          label: "Born date",
          required: true,
          value: '',
          errors: [],
        },
      },
      submit: {
        value: "Register",
        color: "success",
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

    this.props.onRegister({
      attributes: {
        email: this.state.form.controls.email.value,
        password: this.state.form.controls.password.value,
        passwordConfirmation: this.state.form.controls.passwordConfirmation.value,
        firstName: this.state.form.controls.firstName.value,
        lastName: this.state.form.controls.lastName.value,
        bornDate: this.state.form.controls.bornDate.value
      },
      started: this.handleLoginStarted,
      done: this.handleLoginDone
    })
  }

  handleLoginStarted = () => {
    const updatedForm = fromJS(this.state.form)
      .set('loading', true)
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
            to="/login"
            className="text-center"
          >
            Already have an account ? Please log in
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (payload) => dispatch(actionCreators.authRegisterInit(payload))
  }
}

Login.propTypes = {
  loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)