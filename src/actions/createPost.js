import changeHelpMessage from './changeHelpMessage';
import url from '../url'

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
    fetch(url, init).then((response) => {
      if (response.status >= 200 && response.status < 400)
        return response.json();
      else
        return Promise.reject(response.status);
    }).then((json) => {
      dispatch(createPostAction(json.id))
    }).catch((error) => {
      dispatch(changeHelpMessage("Failed to create post: " + error, "danger"))
    });
  });
};

export default createPost;
