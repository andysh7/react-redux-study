import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = ({ syncPosts }) => {
  console.log('syncPosts', syncPosts);
  if (!syncPosts || !syncPosts.length) {
    return <p>Постов пока нет</p>;
  }

  return syncPosts.map(({ id, title }) => <Post title={title} key={id} />);
};

const mapStateToProps = state => {
  console.log(state);
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
