import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Form from '../../components/Form/Form'
import * as actionCreators from '../../store/actions/creators/auth'

class Login extends Component {
  static getDerivedStateFromProps(props, state){
    state.form.loading = props.loading
    state.form.errors = props.form.errors
    return state
  }

  state = {
    form: {
      controls: {
        email: {
          type: "email",
          placeholder: "Your email",
          label: "Email",
          required: true,
          value: '',
          errors: [],
        },
        password: {
          type: "password",
          placeholder: "Your password",
          label: "Password",
          required: true,
          value: '',
          errors: []
        }
      },
      submit: {
        value: "Login",
        color: "primary",
        size: "block"
      },
      errors: [],
      loading: false
    }
  }

  handleFormChange = (name, value) => {
    const form = this.state.form
    const controls = form.controls
    const control = controls[name]

    const updatedControl = {
      ...control,
      value: value
    }

    const updatedControls = {
      ...controls,
      [name]: updatedControl
    }

    const updatedForm = {
      ...form,
      controls: updatedControls
    }

    this.setState({
      form: updatedForm
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.onLogin({
      email: this.state.form.controls.email.value,
      password: this.state.form.controls.password.value
    })
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Form
            classesName={["relative-horizontal-center", "d-inline-block"]}
            controls={this.state.form.controls}
            errors={this.state.form.errors}
            submitted={this.handleFormSubmit}
            changed={this.handleFormChange}
            submit={this.state.form.submit}
            loading={this.state.form.loading} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    form: state.auth.loginForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (attributes) => dispatch(actionCreators.authLoginInit(attributes)),
  }
}

Login.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)