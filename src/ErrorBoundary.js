// https://fr.reactjs.org/docs/error-boundaries.html
import React, { Component } from 'react'

import ErrorLayout from './components/Layout/ErrorLayout/ErrorLayout'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return {
      hasError: true
    }
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
    // logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return (
        <ErrorLayout />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary