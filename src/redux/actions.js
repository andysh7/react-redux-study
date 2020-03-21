import {
  CREATE_POST,
  FETCH_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  REQUEST_POSTS,
} from './types';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

// export function fetchPosts() {
//   return dispatch => {
//     dispatch(showLoader());
//     fetch('https://1jsonplaceholder.typicode.com/posts?_limit=5')
//       .then(response => response.json())
//       .then(data => {
//         dispatch(hideLoader());
//         dispatch({
//           type: FETCH_POSTS,
//           payload: data,
//         });
//       })
//       .catch(() => {
//         dispatch(hideLoader());
//         dispatch(showAlert('Что-то пошло не так'));
//       });
//   };
// }

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, 3000);
  };
}

export function hideAlert(text) {
  return {
    type: HIDE_ALERT,
  };
}
