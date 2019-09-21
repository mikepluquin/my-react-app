import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as api from '../../services/api'
import Posts from '../../components/Posts/Posts'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    api.fetchPosts(this.props.token)
      .then((response) => {
        this.setState({ posts: response.data })
      })
  }

  render() {
    let content = (
      <p>No post for the moment !</p>
    )

    if (this.state.posts.length > 0) {
      content = (
        <Posts posts={this.state.posts} />
      )
    }

    return content
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Home)