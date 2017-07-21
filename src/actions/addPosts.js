const addPosts = (posts) => {
  return {
    type: 'ADD_POSTS',
    posts
  };
};

export default addPosts;