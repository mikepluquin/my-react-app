import React, { memo } from 'react'

import Post from './Post/Post'

const posts = props => {
  return (
    <div className="container">
      {
        props.posts.map(post => (
          <Post
            {...post}
            key={post.id}
          />
        )
        )}
    </div>
  )
}

export default memo(posts)