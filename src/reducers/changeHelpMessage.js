const changeHelpMessage = (state, newValue, newStatus) => {
  return ({
    posts: state.posts,
    newPost: state.newPost,
    helpMessage: newValue,
    helpStatus: newStatus
  })
};

export default changeHelpMessage;
