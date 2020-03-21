import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_INIT_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS
} from "../actions/actionTypes";

const INITIAL_STATE = {
  user: null,
  error: null
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.user};
    case LOGIN_USER_FAILURE:
      return {...state, error: action.error.response.data.message};
    case LOGOUT_USER_SUCCESS:
      return {...state, user: null};
    case LOGIN_USER_INIT_SUCCESS:
      return {...state, error: null};
    default: return state;
  }
};

export default usersReducer;