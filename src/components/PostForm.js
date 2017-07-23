import React from 'react';
import FormElem from './FormElem';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
  }
  submit(event) {
    event.preventDefault();
    this.props.createPost(this.props.post);
  }
  changeTitle(event) {
    this.props.changeTitle(event.target.value);
  }
  changeBody(event) {
    this.props.changeBody(event.target.value);
  }
  render() {
    return (
      <form onSubmit={ this.submit }>
        <h3>Create new post</h3>
        <span className="label label-warning">Due to the nature of JSONPlaceholder, you are limited to one new post, subsequent new posts will replace the existing one</span>
        <FormElem value={ this.props.post.title } onChange={ this.changeTitle } />
        <FormElem value={ this.props.post.body } onChange={ this.changeBody } />
        <input className="btn btn-default" type="submit" />
      </form>
    );
  }
}

export default PostForm;
