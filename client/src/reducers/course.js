import { GET_COURSES, COURSES_ERROR, GET_COURSE } from '../actions/types'

const initialState = {
 courses: [],
 course: null,
 loading: true,
 error: {},
}

export default function (state = initialState, action) {
 const { type, payload } = action
 // Get all courses
 switch (type) {
  case GET_COURSES:
   return {
    ...state,
    courses: payload,
    loading: false,
   }

  // Get single course
  case GET_COURSE:
   return {
    ...state,
    courses: payload,
    loading: false,
   }
  //  Return if error
  case COURSES_ERROR:
   return {
    ...state,
    error: payload,
    loading: false,
   }

  default:
   return state
 }
}
