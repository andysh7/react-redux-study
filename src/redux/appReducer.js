import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from './types';

const initialState = {
  loading: false,
  alert: null,
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
      break;
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
      break;
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
      break;
    case HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
      break;

    default:
      return state;
  }
};
