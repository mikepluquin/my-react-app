import React, { Component } from 'react'

import Posts from '../../components/Posts/Posts'

class Home extends Component{
  state = {
    posts: []
  }

  render(){
    return(
      <Posts posts={this.state.posts}/>
    )
  }
}

export default Home