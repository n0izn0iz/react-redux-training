import changeHelpMessage from './changeHelpMessage';
import url from '../config/url'
import fetchJSON from '../utils/fetchJSON'

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
    fetchJSON(url, init).then((json) => {
      dispatch(createPostAction(json.id))
    }).catch((error) => {
      dispatch(changeHelpMessage("Failed to create post: " + error, "danger"))
    });
  });
};

export default createPost;
