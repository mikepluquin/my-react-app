import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fromJS } from 'immutable'

import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import FormGroup from '../../components/Form/FormGroup/FormGroup'
import * as actionCreators from '../../store/auth/actionCreators'

class Register extends Component {
  state = {
    form: {
      controls: {
        email: {
          type: "email",
          placeholder: "your email",
          label: "Email",
          required: true,
          value: '',
          valid: false,
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
        password_confirmation: {
          type: "password",
          placeholder: "confirm your password",
          label: "Password confirmation",
          required: true,
          value: '',
          valid: false,
          errors: [],
        },
        username: {
          type: "text",
          placeholder: "your username",
          label: "Username",
          required: true,
          value: '',
          valid: false,
          errors: [],
        },
        born_date: {
          type: "date",
          placeholder: "your born date",
          label: "Born date",
          value: '',
          valid: false,
          errors: [],
        },
      },
      submit: {
        value: "Register",
        color: "red",
        size: "block"
      },
      valid: false,
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

    const attributes = {}
    // submit all attributes
    Object.keys(this.state.form.controls).forEach((obj) => {
      attributes[obj] = this.state.form.controls[obj].value
    })

    new Promise((resolve, reject) => {
      this.handleRegisterStarted()
      this.props.onRegister({
        attributes: attributes,
        resolve: resolve,
        reject: reject
      })
    }).then(() => {
      this.handleRegisterDone()

    }).catch((payload) => {
      this.handleRegisterDone(payload)
    })
  }

  handleRegisterStarted = () => {
    const updatedForm = fromJS(this.state.form)
      .set('loading', true)
      .set('disabled', true)
      .toJS()

    this.setState({
      form: updatedForm
    })
  }

  handleRegisterDone = (payload = null) => {
    const errors = payload && payload.errors ? payload.errors : {}
    let updatedForm = fromJS(this.state.form)
      .set('loading', false)
      .set('disabled', false)

    // add valid statuses
    Object.keys(this.state.form.controls).forEach((controlKey) => {
      if (errors[controlKey]) {
        updatedForm = updatedForm
          .setIn(['controls', controlKey, 'errors'], errors[controlKey])
      }
      else {
        updatedForm = updatedForm
          .setIn(['controls', controlKey, 'valid'], true)
          .setIn(['controls', controlKey, 'errors'], [])
      }
    })

    updatedForm = updatedForm.toJS()

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
                    name="password_confirmation"
                    control={this.state.form.controls.password_confirmation}
                    disabled={this.state.form.disabled}
                    changed={(name, value) => this.handleFormChange(name, value)} />
                </div>

                <div className="col-md-6">
                  <FormGroup
                    name="username"
                    control={this.state.form.controls.username}
                    disabled={this.state.form.disabled}
                    changed={(name, value) => this.handleFormChange(name, value)} />

                  <FormGroup
                    name="born_date"
                    control={this.state.form.controls.born_date}
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

const mapDispatchToProps = dispatch => {
  return {
    onRegister: (payload) => dispatch(actionCreators.authRegisterInit(payload))
  }
}

Register.propTypes = {
  loading: PropTypes.bool
}

export default connect(null, mapDispatchToProps)(Register)