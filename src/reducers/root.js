import init from './init';
import addPosts from './addPosts';
import createPost from './createPost';
import changeTitle from './changeTitle';
import changeBody from './changeBody';
import changeHelpMessage from './changeHelpMessage';

const root = (state, action) => {
  if (state === undefined)
    return init();
  switch (action.type) {
  case 'ADD_POSTS':
    return addPosts(state, action.posts);
  case 'CREATE_POST':
    return createPost(state, action.id);
  case 'CHANGE_TITLE':
    return changeTitle(state, action.value);
  case 'CHANGE_BODY':
    return changeBody(state, action.value);
  case 'CHANGE_HELP_MESSAGE':
    return changeHelpMessage(state, action.value, action.status);
  default:
    return (state);
  }
};

export default root;
