import {ADD_THING_FAILURE, FETCH_CATEGORIES_SUCCESS, FETCH_THING_SUCCESS, FETCH_THINGS_SUCCESS} from "./actionTypes";
import axiosApi from "../../axiosConfig";
import {push} from 'connected-react-router';

export const fetchCategoriesSuccess = categories => ({type: FETCH_CATEGORIES_SUCCESS, categories});

export const fetchThingsSuccess = things => ({type: FETCH_THINGS_SUCCESS, things});
export const fetchThingSuccess = thing => ({type: FETCH_THING_SUCCESS, thing});

export const addThingFailure = error => ({type: ADD_THING_FAILURE, error});

export const fetchCategories = () => async (dispatch, getState) => {
  try {
    if(!getState().users.user) {
      dispatch(push('/'));
    }
    const resp = await axiosApi.get('/things/categories');
    dispatch(fetchCategoriesSuccess(resp.data))
  } catch (e) {
    console.log(e);
  }
};

export const fetchThings = id => async dispatch => {
  try {
    const resp = await axiosApi.get(`/things${id ? `/categories/${id}` : ''}`);
    dispatch(fetchThingsSuccess(resp.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchThing = id => async dispatch => {
  try {
    const resp = await axiosApi.get(`/things/${id}`);
    dispatch(fetchThingSuccess(resp.data));
  } catch (e) {
    console.log(e);
  }
};

export const addThing = thing => async dispatch => {
  try {
    await axiosApi.post('/things', thing);
    dispatch(push('/'));
  } catch (e) {
    dispatch(addThingFailure(e));
  }
};

export const deleteThing = id => async dispatch => {
  try {
    await axiosApi.delete('/things/'+id);
    dispatch(push('/'));
  } catch (e) {
    console.log(e);
  }
};