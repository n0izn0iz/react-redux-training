const changeBody = (state, newValue) => {
  return ({
    posts: state.posts,
    newPost: {
      title: state.newPost.title,
      body: newValue
    },
    helpMessage: state.helpMessage,
    helpStatus: state.helpStatus
  })
};

export default changeBody;
