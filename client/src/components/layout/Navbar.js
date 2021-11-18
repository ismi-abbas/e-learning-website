import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
 return (
  <div>
   {/* Navigation Bar */}
   <nav className='navbar navbar-expand-sm navbar-default '>
    <div className='container-fluid'>
     <Link to='/' className='navbar-brand'>
      {' '}
      <img src='#logo' alt className='d-inline-block align-text-top p-1' />
     </Link>
     <div className='collapse navbar-collapse ' id='navbar-default'>
      <ul className='nav navbar-nav navbar-nav-lg '>
       <li className='navbar-item dropdown  px-2 '>
        <Link
         to='/user'
         className='nav-link'
         id='navbarHome'
         data-bs-toggle
         data-bs-display
        >
         Home <span className='carpet' />
        </Link>
       </li>
       {/* Courses Section */}
       <li className='navbar-item dropdown  px-2'>
        <Link
         to='/learning'
         className='nav-link'
         id='navbarPage'
         data-bs-toggle
         data-bs-display
        >
         My Learning
        </Link>
       </li>
       {/* Search Form */}
      </ul>
     </div>
     <div>
      <span>&nbsp;</span>
      <Link
       className='btn btn-primary fw-bold'
       to='/dashboard'
       id='login'
       style={{ marginLeft: 2 }}
      >
       <i className='fas fa-user' /> {''}
       <span>Dashboard</span>
      </Link>
     </div>
     {/* Logout Button */}
     <div>
      <span>&nbsp;</span>
      <Link
       className='btn btn-danger fw-bold'
       to='/login'
       id='login'
       onClick={logout}
       style={{ marginLeft: 2 }}
      >
       <i className='fas fa-sign-out-alt' /> {''}
       <span>Logout</span>
      </Link>
     </div>
    </div>
   </nav>
  </div>
 );
};

Navbar.propTypes = {
 logout: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
 auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
