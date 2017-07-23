import React from 'react';
import FormElem from './FormElem';

const bindValueGetter = (callback) => {
  return (event) => {
    callback(event.target.value)
  }
}

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(event) {
    event.preventDefault();
    this.props.createPost(this.props.post);
  }
  render() {
    return (
      <form onSubmit={ this.submit }>
        <h3>Create new post</h3>
        <span className="label label-warning">Due to the nature of JSONPlaceholder, you are limited to one new post, subsequent new posts will replace the existing one</span>
        <FormElem
          value={ this.props.post.title }
          onChange={ bindValueGetter(this.props.changeTitle) }
        />
        <FormElem
          value={ this.props.post.body }
          onChange={ bindValueGetter(this.props.changeBody) }
        />
        <input className="btn btn-default" type="submit" />
      </form>
    );
  }
}

export default PostForm;
