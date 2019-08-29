import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fromJS } from 'immutable'

import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import FormGroup from '../../components/Form/FormGroup/FormGroup'
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
      loading: false,
      disabled: false
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
        <div className="col-md-6 offset-md-3">
          <form onSubmit={this.handleFormSubmit}>
            <fieldset disabled={this.state.form.disabled}>
              <div className="row">
                <div className="col-md-6">
                  <FormGroup
                    name="email"
                    control={this.state.form.controls.email}
                    disabled={this.state.form.disabled}
                    changed={(name, value) => this.handleFormChange(name, value)} />

                  <FormGroup
                    name="password"
                    control={this.state.form.controls.password}
                    disabled={this.state.form.disabled}
                    changed={(name, value) => this.handleFormChange(name, value)} />

                  <FormGroup
                    name="passwordConfirmation"
                    control={this.state.form.controls.passwordConfirmation}
                    disabled={this.state.form.disabled}
                    changed={(name, value) => this.handleFormChange(name, value)} />
                </div>

                <div className="col-md-6">
                  <FormGroup
                    name="firstName"
                    control={this.state.form.controls.firstName}
                    disabled={this.state.form.disabled}
                    changed={(name, value) => this.handleFormChange(name, value)} />

                  <FormGroup
                    name="lastName"
                    control={this.state.form.controls.lastName}
                    disabled={this.state.form.disabled}
                    changed={(name, value) => this.handleFormChange(name, value)} />

                  <FormGroup
                    name="bornDate"
                    control={this.state.form.controls.bornDate}
                    disabled={this.state.form.disabled}
                    changed={(name, value) => this.handleFormChange(name, value)} />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  {this.state.form.submit ?
                    <Button {...this.state.form.submit} type="submit">
                      {
                        this.state.form.loading ?
                          <Spinner
                            size="sm"
                          /> :
                          this.state.form.submit.value
                      }
                    </Button> :
                    null
                  }
                </div>
              </div>
            </fieldset>
          </form>

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