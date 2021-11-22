import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import { logout } from '../../actions/auth';

import ClientDashboard from '../dashboard/user/ClientDashboard';
import ClientMain from '../dashboard/user/ClientMain';
import { Redirect } from 'react-router';
import ClientNavbar from '../dashboard/user/ClientNavbar';

const Landing = ({ isAuthenticated }) => {
 if (isAuthenticated) {
  return <Redirect to='/profile' />;
 }

 return (
  <div>
   <ClientNavbar />
   <ClientDashboard />
   <ClientMain />
  </div>
 );
};

Landing.propTypes = {
 isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
 isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
