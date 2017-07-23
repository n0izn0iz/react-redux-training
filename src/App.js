import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// My stuff
import url from './config/url'

import store from './utils/store'
import fetchJSON from './utils/fetchJSON'

import PostForm from './components/PostForm'
import Thread from './components/Thread'

import addPosts from './actions/addPosts'
import changeBody from './actions/changeBody'
import changeHelpMessage from './actions/changeHelpMessage'
import changeTitle from './actions/changeTitle'
import createPost from './actions/createPost'

class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
    fetchJSON(url).then((posts) => {
      store.dispatch(addPosts(posts));
    }).catch((error) => {
      store.dispatch(changeHelpMessage("Failed to fetch posts: " + error, "danger"));
    });
  }
  createPost() { store.dispatch(createPost()); }
  changeTitle(title) { store.dispatch(changeTitle(title)) }
  changeBody(body) { store.dispatch(changeBody(body)) }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Redux-Thunk-JSONPlaceholder demo!</h2>
        </div>
        <PostForm
          post={ store.getState().newPost }
          createPost={ this.createPost.bind(this) }
          changeTitle={ this.changeTitle.bind(this) }
          changeBody={ this.changeBody.bind(this) }
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
