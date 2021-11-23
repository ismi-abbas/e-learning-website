import React, { useEffect } from 'react';
import Course from './Course';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

// Component
import Navbar from './Navbar';
import UserMain from '../page/user/UserMain';
import AdminProfile from '../Dashboard/Admin/AdminProfile';

const Courses = () => {
 return (
  <div>
   <Navbar />
  </div>
 );
};

export default Courses;
