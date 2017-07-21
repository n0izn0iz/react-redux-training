const createPostAction = (id) => {
  return {
    type: 'CREATE_POST',
    id
  };
};

const createPost = (post) => {
  return (dispatch => {
    const init = {
      method: 'POST',
      data: post
    };
    console.log("Posting post")
    fetch('http://localhost:3001/posts', init).then((response) => {
      return (response.json());
    }).then((json) => {
      console.log("Post posted with id")
      console.log(json)
      dispatch(createPostAction(json.id))
    });
  });
};

export default createPost;