import sortPostsReverse from '../utils/sortPostsReverse';

const addPosts = (state, posts) => {
  return ({
    posts: state.posts.concat(posts).sort(sortPostsReverse),
    newPost: state.newPost,
    helpMessage: state.helpMessage,
    helpStatus: state.helpStatus
  });
}

export default addPosts;
