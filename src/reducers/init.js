import newPost from '../utils/newPost';

const init = () => {
  return {
    posts: [],
    newPost: newPost(),
    helpMessage: '',
    helpStatus: 'hidden'
  };
}

export default init
