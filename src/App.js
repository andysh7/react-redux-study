import React, { Component } from 'react';
import PostForm from './components/PostForm';
import FetchedPosts from './components/FetchedPosts';
import Posts from './components/Posts';
import Alert from './components/Alert';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        {this.props.alert && (
          <div className="row">
            <div className="col">
              <Alert text={this.props.alert} />
            </div>
          </div>
        )}

        <div className="row">
          <div className="col">
            <PostForm />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Cинхронные посты</h2>
            <Posts />
          </div>
          <div className="col">
            <h2>Асинхронные посты</h2>
            <FetchedPosts />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps)(App);
