import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// My stuff
import store from './store'
import PostForm from './components/PostForm'
import fetchPosts from './fetchPosts'
import addPosts from './actions/addPosts'
import changeTitle from './actions/changeTitle'
import changeBody from './actions/changeBody'
import createPost from './actions/createPost'
import Thread from './components/Thread'
import url from './url'
import changeHelpMessage from './actions/changeHelpMessage'

class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
    fetchPosts(url).then((posts) => {
      store.dispatch(addPosts(posts));
    }).catch((error) => {
      store.dispatch(changeHelpMessage("Failed to fetch posts: " + error, "danger"));
    });
  }
  createPost() {
      store.dispatch(createPost());
  }
  changeTitle(title) {
      store.dispatch(changeTitle(title))
  }
  changeBody(body) {
      store.dispatch(changeBody(body))
  }
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
