import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../../index.css'

import { BiTimeFive } from 'react-icons/bi'
import { GrCertificate } from 'react-icons/gr'
import { AiFillBook } from 'react-icons/ai'

const CourseView = ({
 auth,
 course: {
  _id,
  user,
  desc,
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
  <div className='container rounded my-4 p-5 shadow-lg'>
   <div className='row'>
    <div className='col-lg-4 col-md-12'>
     <div>
      <div className='lead'>
       Instructor: {''}
       <span to='/' className='fw-bolder'>
        {instructor}
       </span>
      </div>
      <div className='py-2'>
       <BiTimeFive className='icon fa-2x' />
       Approximately take {duration} to complete
      </div>
      <div className='py-2'>
       <AiFillBook className='icon fa-2x' />
       Course level: {''} {level}
      </div>
      <div className='py-2'>
       <GrCertificate className='icon fa-2x' />
       Earn a Certificate upon completion
      </div>
     </div>
    </div>
    <div className='col-lg-6 col-md-12'>
     <h3 className='pt-3'>{title}</h3>
     <h4 className='mt-4 mb-3'>Description</h4>
     <p>{desc}</p>
     <div>
      <div class='embed-responsive embed-responsive-16by9 rounded'>
       <iframe class='embed-responsive-item' src={url}></iframe>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

CourseView.propTypes = {
 course: PropTypes.object.isRequired,
 auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
 auth: state.auth,
})

export default connect(mapStateToProps, {})(CourseView)
