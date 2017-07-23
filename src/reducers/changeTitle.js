const changeTitle = (state, newValue) => {
  return ({
    posts: state.posts,
    newPost: {
      title: newValue,
      body: state.newPost.body
    },
    helpMessage: state.helpMessage,
    helpStatus: state.helpStatus
  })
};

export default changeTitle;
