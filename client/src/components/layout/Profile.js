import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

// Component
import AdminDashboard from './AdminDashboard';
import Navbar from './Navbar';
import UserMain from '../page/user/UserMain';
import UserDashboard from '../page/user/UserDashboard';

const Profile = ({ getCurrentProfile, auth, profile }) => {
 useEffect(() => {
  getCurrentProfile();
 }, []);

 return (
  <div>
   <Navbar />
   <UserDashboard />
   <UserMain />
  </div>
 );
};

Profile.propTypes = {
 getCurrentProfile: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
 auth: state.auth,
 profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
