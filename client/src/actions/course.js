import axios from 'axios'
import { setAlert } from './alert'
import { GET_COURSES, COURSES_ERROR, GET_COURSE } from './types'

// Get courses
export const getCourses = () => async (dispatch) => {
 try {
  const res = await axios.get('/api/course')
  dispatch({
   type: GET_COURSES,
   payload: res.data,
  })
 } catch (err) {
  dispatch({
   type: COURSES_ERROR,
   payload: { msg: err.response.statusText, status: err.response.status },
  })
 }
}

// Get single course
export const getCourse = (id) => async (dispatch) => {
 try {
  const res = await axios.get(`/api/course/${id}`)
  dispatch({
   type: GET_COURSE,
   payload: res.data,
  })
  console.log(res.data)
 } catch (err) {
  dispatch({
   type: COURSES_ERROR,
   payload: { msg: err.response.statusText, status: err.response.status },
  })
 }
}
