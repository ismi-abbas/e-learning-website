// This is the action file for uploading course
import axios from 'axios';
import { UPLOAD_COURSE, UPLOAD_ERROR } from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

// Upload Course
export const upload =
 ({ filename }) =>
 async (dispatch) => {
  const config = {
   headers: {
    'Content-Type': 'multipart/form-data',
   },
  };

  const body = JSON.stringify({ filename });

  if (localStorage.token) {
   setAuthToken(localStorage.token);
  }

  try {
   const res = await axios.post('/api/upload', body, config);

   dispatch({
    type: UPLOAD_COURSE,
    payload: res.data,
   });
  } catch (err) {
   dispatch({
    type: UPLOAD_ERROR,
   });
  }
 };
