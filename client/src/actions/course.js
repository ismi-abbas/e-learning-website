import axios from 'axios';
import { setAlert } from './alert';
import { GET_COURSE, COURSE_ERROR, AUTH_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

// Load Course
export const loadCourse = () => async (dispatch) => {
 if (localStorage.token) {
  setAuthToken(localStorage.token);
 }

 try {
  const res = await axios.get('/api/course');

  dispatch({
   type: GET_COURSE,
   payload: res.data,
  });
 } catch (err) {
  dispatch({
   type: AUTH_ERROR,
  });
 }
};
