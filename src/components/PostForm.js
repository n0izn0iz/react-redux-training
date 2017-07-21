import React from 'react';

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
    return <form onSubmit={ this.submit }>
      <label>Title<input value={ this.props.post.title } onChange={ this.changeTitle } type="text" /></label>
      <label>Body<input value={ this.props.post.body } onChange={ this.changeBody } type="text" /></label>
      <input type="submit" />
    </form>;
  }
}

export default PostForm;