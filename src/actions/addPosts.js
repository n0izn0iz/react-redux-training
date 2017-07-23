import fetchJSON from '../utils/fetchJSON'
import url from '../config/url'
import changeHelpMessage from './changeHelpMessage'

const addPostsAction = (posts) => {
  return {
    type: 'ADD_POSTS',
    posts
  };
};

const addPosts = () => {
  return (dispatch => {
    fetchJSON(url).then((posts) => {
      dispatch(addPostsAction(posts));
    }).catch((error) => {
      dispatch(changeHelpMessage("Failed to fetch posts: " + error, "danger"));
    });
  });
}


export default addPosts;
