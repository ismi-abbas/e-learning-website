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
import CourseView from './CourseView'

const Course = ({ getCourse, course: { course, loading }, match }) => {
 useEffect(() => {
  getCourse(match.params.id)
 }, [getCourse])

 return loading || course === null ? (
  <div class='spinner-border' role='status'>
   <span class='visually-hidden'>Loading...</span>
  </div>
 ) : (
  <div>
   <div className='container'>
    <Link to='/courses' className='btn btn-success  shadow rounded-2'>
     <i className='fas fa-arrow-circle-left' /> {''}
     Back to courses
    </Link>
    <Navbar />
    <CourseView course={course} />
   </div>
  </div>
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
