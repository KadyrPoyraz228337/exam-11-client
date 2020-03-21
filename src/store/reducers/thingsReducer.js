import {
  ADD_THING_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_THING_SUCCESS,
  FETCH_THINGS_SUCCESS
} from "../actions/actionTypes";

const INITIAL_STATE = {
  things: null,
  thing: null,
  categories: null,
  error: null
};

const thingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {...state, categories: action.categories};
    case ADD_THING_FAILURE:
      return {...state, error: action.error.response.data.message};
    case FETCH_THINGS_SUCCESS:
      return {...state, things: action.things};
    case FETCH_THING_SUCCESS:
      return {...state, thing: action.thing};
    default: return state;
  }
};

export default thingsReducer;