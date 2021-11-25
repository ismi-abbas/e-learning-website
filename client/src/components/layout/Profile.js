import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

// Component
import Navbar from './Navbar';
import AdminProfile from '../Dashboard/Admin/AdminProfile';
import DashboardMain from './DashboardMain';

const Profile = ({ getCurrentProfile, auth, profile }) => {
 useEffect(() => {
  window.scrollTo(0, 0);
  getCurrentProfile();
 }, []);

 return (
  <div>
   <Navbar />
   <DashboardMain />
   <AdminProfile />
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
