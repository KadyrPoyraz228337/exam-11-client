import axiosApi from "../../axiosConfig";
import {push} from 'connected-react-router'
import {LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS} from "./actionTypes";

export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
export const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});

export const logoutUserSuccess = () => ({type: LOGOUT_USER_SUCCESS});

export const registerUser = user => async dispatch => {
  try {
    const resp = await axiosApi.post('/users', user);
    dispatch(loginUserSuccess(resp.data));
    dispatch(push('/'))
  } catch (e) {
    dispatch(loginUserFailure(e))
  }
};

export const loginUser = user => async dispatch => {
  try {
    const resp = await axiosApi.post('/users/sessions', user);
    dispatch(loginUserSuccess(resp.data));
    dispatch(push('/'))
  } catch (e) {
    dispatch(loginUserFailure(e))
  }
};

export const logoutUser = () => async dispatch => {
  await axiosApi.delete('users/sessions');
  dispatch(logoutUserSuccess());
  dispatch(push('/'));
};