import { GET_COURSE, COURSE_ERROR } from '../actions/types';

const initialState = {
 token: localStorage.getItem('token'),
 isAuthenticated: null,
 loading: true,
};

export default function (state = initialState, action) {
 const { type, payload } = action;

 switch (type) {
  case GET_COURSE:
   return {
    ...state,
    isAuthenticated: true,
    loading: false,
    course: payload,
   };

  default:
   return state;
 }
}
