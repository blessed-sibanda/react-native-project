import * as types from './types';

export const setLoading = () => dispatch => dispatch({type: types.SET_LOADING});

export const clearLoading = () => dispatch =>
  dispatch({type: types.CLEAR_LOADING});

export const changeTheme = name => dispatch =>
  dispatch({type: types.CHANGE_THEME, payload: name});

export const changeStatusBar = config => dispatch =>
  dispatch({type: types.CHANGE_STATUS_BAR, payload: config});
