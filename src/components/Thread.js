import React from 'react';
import Post from './Post'

const Thread = (props) => {
  const listItems = props.posts.map((post) => {
    return <li key={ post.id } className="list-group-item">
      <Post title={ post.title } body= { post.body } />
    </li>
  })
  return <div className="container"><h3>Thread</h3><ul className="list-group">{ listItems }</ul></div>
}

export default Thread;
