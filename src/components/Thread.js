import React from 'react';
import Post from './Post'

const Thread = (props) => {
  const listItems = props.posts.map((post) => {
    return <li key={ post.id }>
      <Post title={ post.title } body= { post.body } />
    </li>
  })
  return <ul>{ listItems }</ul>
}

export default Thread;