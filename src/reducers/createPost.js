import newPost from '../utils/newPost';
import sortPostsReverse from '../utils/sortPostsReverse';

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

const createPost = (state, id) => {
  let post = state.newPost;
  post.id = id
  let posts, helpMessage, helpStatus;
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
}

export default createPost;
