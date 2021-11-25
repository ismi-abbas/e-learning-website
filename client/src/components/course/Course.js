import React, { Fragemet, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCourse } from '../../actions/course'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'

import { BiTimeFive } from 'react-icons/bi'
import { GrCertificate } from 'react-icons/gr'
import Navbar from '../layout/Navbar'
import CourseItem from '../courses/CourseItem'

const Course = ({ getCourse, auth, course: { course, loading }, match }) => {
 useEffect(() => {
  window.scrollTo(0, 0)
  getCourse(match.params._id)
 }, [])
 return loading || course === null ? (
  <Spinner />
 ) : (
  <>
   <Link to='/course' className='btn'>
    Back To Course
   </Link>
   <CourseItem course={course} />
  </>
 )
}

Course.propTypes = {
 getCourse: PropTypes.func.isRequired,
 course: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
 course: state.course,
})

export default connect(mapStateToProps, { getCourse })(Course)
