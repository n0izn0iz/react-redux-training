import React from 'react';

const PostForm = (props) => {
  return (
    <form onSubmit={ bindSubmit(props.createPost, props.post) }>
      <h3>Create new post</h3>
      <span className="label label-warning">Due to the nature of JSONPlaceholder, you are limited to one new post, subsequent new posts will replace the existing one</span>
      <Title
        value={ props.post.title }
        onChange={ bindValueGetter(props.changeTitle) }
      />
      <Body
        value={ props.post.body }
        onChange={ bindValueGetter(props.changeBody) }
      />
      <input className="btn btn-default" type="submit" />
    </form>
  );
};

const Title = (props) => {
  return (
    <div className="form-group">
      <label>
        Title
        <input
          className="form-control"
          value={ props.value }
          onChange={ props.onChange }
          type="text"
        />
      </label>
    </div>
  );
};

const Body = (props) => {
  return (
    <div className="form-group">
      <label>
        Body
        <textarea
          className="form-control"
          value={ props.value }
          onChange={ props.onChange }
        />
      </label>
    </div>
  );
};

const bindSubmit = (createPost, post) => {
  return (event) => {
    event.preventDefault();
    createPost(post);
  };
};

const bindValueGetter = (callback) => {
  return (event) => {
    callback(event.target.value)
  };
};

export default PostForm;
