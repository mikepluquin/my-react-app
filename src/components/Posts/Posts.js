import React, { Fragment, memo } from 'react'

import Post from './Post/Post'

const posts = props => {
  return (
    <Fragment>
      {
        props.posts.map(post => (
          <Post
            key={post.id}
          />
        )
        )}
    </Fragment>
  )
}

export default memo(posts)