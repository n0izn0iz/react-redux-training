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

class App extends Component {
  componentDidMount() {
    console.log("AppDidMount")
    store.subscribe(() => {
      this.forceUpdate();
    });
    console.log("Fetching posts...");
    const result = fetchPosts('http://localhost:3001/posts');
    result.then((posts) => {
      console.log("Fetched posts:");
      console.log(posts);
      store.dispatch(addPosts(posts));
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
          <h2>Welcome to React</h2>
        </div>
        <PostForm
          post={ store.getState().newPost }
          createPost={ this.createPost.bind(this) }
          changeTitle={ this.changeTitle.bind(this) }
          changeBody={ this.changeBody.bind(this) }
        />
        <Thread posts={ store.getState().posts } />
      </div>
    );
  }
}

export default App;
