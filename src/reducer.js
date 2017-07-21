const newPost = () => {
  return ({
    title: 'New post',
    body: '',
    state: 'init'
  });
};

const reducer = (state, action) => {
  console.log("REDUCER:")
  console.log("state:")
  console.log(state);
  console.log("action:")
  console.log(action);
  if (state === undefined)
    return {
      posts: [],
      newPost: newPost()
    };
  switch (action.type) {
  case 'ADD_POSTS':
    return ({
        posts: state.posts.concat(action.posts),
        newPost: state.newPost
    });
  case 'CREATE_POST':
    const post = state.newPost;
    post.id = action.id;
    return ({
      posts: state.posts.concat(post),
      newPost: newPost()
    })
  case 'CHANGE_TITLE':
    return ({
      posts: state.posts,
      newPost: {
        title: action.value,
        body: state.newPost.body
      }
    })
  case 'CHANGE_BODY':
    return ({
      posts: state.posts,
      newPost: {
        title: state.newPost.title,
        body: action.value
      }
    })
  default:
    return (state);
  }
};

export default reducer;