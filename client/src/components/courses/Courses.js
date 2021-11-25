// Parent component for course
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { BiTimeFive } from 'react-icons/bi';
import { GrCertificate } from 'react-icons/gr';
import CourseItem from './CourseItem.js';
import '../../index.css';
import { Row, Col } from 'react-bootstrap';

// Redux
import { connect } from 'react-redux';
import { getCourses } from '../../actions/course';

const Courses = ({ getCourses, course: { courses, loading } }) => {
 useEffect(() => {
  window.scrollTo(0, 0);
  getCourses();
 }, [getCourses]);

 return loading ? (
  <Spinner />
 ) : (
  <>
   <section>
    <div className='container mt-4'>
     <div className='row mb-4'>
      <div className='col'>
       <h3 className='mb-0 fw-semi-bold'>Courses</h3>
      </div>
     </div>
     <div className='row'>
      {courses.map((course) => (
       <div className='col-sm-12 col-md-6 col-lg-3' key={course.id}>
        <CourseItem course={course} />
       </div>
      ))}
     </div>
    </div>
   </section>
  </>
 );
};

Courses.propTypes = {
 getCourses: PropTypes.func.isRequired,
 course: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
 course: state.course,
});

export default connect(mapStateToProps, { getCourses })(Courses);
