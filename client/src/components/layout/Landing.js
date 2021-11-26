import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
// import { logout } from '../../actions/auth';

import ClientDashboard from '../Dashboard/User/ClientDashboard'
import { Redirect } from 'react-router'
import ClientNavbar from '../Dashboard/User/ClientNavbar'
import LandingMain from '../Dashboard/User/LandingMain'

const Landing = ({ isAuthenticated }) => {
 if (isAuthenticated) {
  return <Redirect to='/profile' />
 }

 return (
  <div>
   <ClientNavbar />
   <ClientDashboard />
   <LandingMain />
   {/* <ClientMain /> */}
  </div>
 )
}

Landing.propTypes = {
 isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
 isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Landing)
