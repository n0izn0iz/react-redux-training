import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// My stuff
import store from './utils/store'

import PostForm from './components/PostForm'
import Thread from './components/Thread'

import addPosts from './actions/addPosts'
import changeBody from './actions/changeBody'
import changeTitle from './actions/changeTitle'
import createPost from './actions/createPost'

const bindDispatch = (callback) => {
  return (args) => {
    store.dispatch(callback(args));
  }
};

class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addPosts());
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Redux-Thunk-JSONPlaceholder</h2>
        </div>
        <PostForm
          post={ store.getState().newPost }
          createPost={ bindDispatch(createPost) }
          changeTitle={ bindDispatch(changeTitle) }
          changeBody={ bindDispatch(changeBody) }
        />
    		<span className={ "label label-" + store.getState().helpStatus }>
          { store.getState().helpMessage }
        </span>
        <Thread posts={ store.getState().posts } />
      </div>
    );
  }
}

export default App;
