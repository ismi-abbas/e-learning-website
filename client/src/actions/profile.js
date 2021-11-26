import axios from 'axios'

import {
 GET_PROFILE,
 GET_PROFILES,
 PROFILE_ERROR,
 CLEAR_PROFILE,
} from './types'

/// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
 try {
  const res = await axios.get('/api/profile/me')

  dispatch({
   type: GET_PROFILE,
   payload: res.data,
  })
 } catch (err) {
  dispatch({
   type: PROFILE_ERROR,
   payload: { msg: err.response.statusText, status: err.response.status },
  })
 }
}

// Get all profile
export const getProfiles = () => async (dispatch) => {
 dispatch({ type: CLEAR_PROFILE })

 try {
  const res = await axios.get('api/profile')

  dispatch({
   type: GET_PROFILES,
   payload: res.data,
  })
 } catch (err) {
  dispatch({
   type: PROFILE_ERROR,
   payload: {
    msg: err.response.statusText,
    status: err.response.status,
   },
  })
 }
}
// Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
 try {
  const res = await axios.get(`/api/profile/user/${userId}`)

  dispatch({
   type: GET_PROFILE,
   payload: res.data,
  })
 } catch (err) {
  dispatch({
   type: PROFILE_ERROR,
   payload: { msg: err.response.statusText, status: err.response.status },
  })
 }
}
