import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("STATE:")
  console.log(store.getState());
});

export default store;