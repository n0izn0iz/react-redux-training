const newPost = () => {
  return ({
    title: 'New post',
    body: ''
  });
};

const sortPostsReverse = (a, b) => {
  if (a.id < b.id)
    return (1);
  else if (a.id === b.id)
    return (0);
  else
    return (-1);
}

const postIdExists = (posts, newPostId) => {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === newPostId) {
      return (true);
    }
  }
  return (false);
}

const replaceExistingPost = (posts, newPost) => {
  return (posts.map((item) => {
    if (item.id === newPost.id) {
      return ({
        id: item.id,
        title: newPost.title,
        body: newPost.body
      })
    } else {
      return (item);
    }
  }));
}

const reducer = (state, action) => {
  if (state === undefined)
    return {
      posts: [],
      newPost: newPost(),
      helpMessage: '',
      helpStatus: 'hidden'
    };
  switch (action.type) {
  case 'ADD_POSTS':
    return ({
        posts: state.posts.concat(action.posts).sort(sortPostsReverse),
        newPost: state.newPost,
        helpMessage: state.helpMessage,
        helpStatus: state.helpStatus
    });
  case 'CREATE_POST':
    let post = state.newPost;
    post.id = action.id
    let posts;
    let helpMessage;
    let helpStatus;
    if (postIdExists(state.posts, post.id)) {
      posts = replaceExistingPost(state.posts, post);
      helpMessage = "Replaced existing message (see above)"
      helpStatus = 'warning'
    } else {
      posts = state.posts.concat(post);
      helpMessage = "Post created!"
      helpStatus = 'success'
    }
    return ({
      posts: posts.sort(sortPostsReverse),
      newPost: newPost(),
      helpMessage: helpMessage || state.helpMessage,
      helpStatus: helpStatus === undefined ? state.helpStatus : helpStatus
    })
  case 'CHANGE_TITLE':
    return ({
      posts: state.posts,
      newPost: {
        title: action.value,
        body: state.newPost.body
      },
      helpMessage: state.helpMessage,
      helpStatus: state.helpStatus
    })
  case 'CHANGE_BODY':
    return ({
      posts: state.posts,
      newPost: {
        title: state.newPost.title,
        body: action.value
      },
      helpMessage: state.helpMessage,
      helpStatus: state.helpStatus
    })
  case 'CHANGE_HELP_MESSAGE':
    return ({
      posts: state.posts,
      newPost: state.newPost,
      helpMessage: action.value,
      helpStatus: action.status
    })
  default:
    return (state);
  }
};

export default reducer;
