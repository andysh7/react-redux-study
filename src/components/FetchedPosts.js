import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Loader from './Loader';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  console.log(loading);

  if (loading) {
    return <Loader />;
  }

  if (!posts || !posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(fetchPosts());
        }}
      >
        Загрузить посты
      </button>
    );
  }

  return posts.map(({ title, id }) => <Post title={title} key={id} />);
};
