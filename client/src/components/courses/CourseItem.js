import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './CourseItem.css'

const CourseItem = ({
 auth,
 course: {
  _id,
  user,
  title,
  url,
  date,
  duration,
  level,
  instructor,
  rating,
  imgSrc,
 },
}) => {
 return (
  <section className='card mb-5'>
   <img className='img rounded-3' src={imgSrc} alt='no image' wi />
   <div className='card-body'>
    <div className='card-title'>{title}</div>
    <div className='fs-6 fw-semi-bold text-muted'>
     Duration :{''}
     {duration}
    </div>
    <div className='fs-6 fw-semi-bold text-secondary'>
     Level: {''}
     {level}
    </div>
    <div className='rating-section text-muted'>
     Rating: {''}
     <span className='text-warning'>{rating}</span>
     <span className='text-secondary'>(13,245)</span>
    </div>
   </div>
   {/* Card footer */}
   <div className='card-footer'>
    <div className='row align-items-center g-0'>
     <div className='col-auto text-muted fw-semi-bold fs-6'>
      Instructor: {''}
      {instructor}
     </div>
     <div className='col-auto ms-auto'>
      <a href='#'>
       <i className='bi bi-bookmark' />
      </a>
      <Link to={`/course/${_id}`} className='btn  btn-primary btn-sm rounded-3'>
       Watch
      </Link>
     </div>
    </div>
   </div>
  </section>
 )
}

CourseItem.propTypes = {
 course: PropTypes.object.isRequired,
 auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
 auth: state.auth,
})

export default connect(mapStateToProps, {})(CourseItem)
