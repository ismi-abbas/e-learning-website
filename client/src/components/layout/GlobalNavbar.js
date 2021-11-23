import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  //  If authorized, navbar change
  const authLinks = (
    <div>
      <nav className='navbar navbar-expand-sm navbar-default '>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            {' '}
            <i className='fas fa-graduation-cap'></i>
            <div className='navbar-brand fw-bold'>YLEARN</div>
          </Link>
          <div className='collapse navbar-collapse ' id='navbar-default'>
            <ul className='nav navbar-nav navbar-nav-lg '>
              <li className='navbar-item dropdown  px-2 '>
                <Link
                  to='/'
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
                  Courses
                </Link>
              </li>
              {/* Search Form */}
            </ul>
          </div>
        </div>
      </nav>
      <span>&nbsp;</span>
      <Link
        className='btn btn-primary fw-bold'
        to='/profile'
        id='login'
        style={{ marginLeft: 2 }}
      >
        <i className='fas fa-user' /> {''}
        <span>Profile</span>
      </Link>
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
  );

  const guestLinks = (
    <div className='d-flex'>
      <nav className='navbar navbar-expand-sm navbar-default '>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            {' '}
            <i className='fas fa-graduation-cap'></i>
            <div className='navbar-brand fw-bold'>YLEARN</div>
          </Link>
          <div className='collapse navbar-collapse ' id='navbar-default'>
            <ul className='nav navbar-nav navbar-nav-lg '>
              <li className='navbar-item dropdown  px-2 '>
                <Link
                  to='/'
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
                  Courses
                </Link>
              </li>
              {/* Search Form */}
            </ul>
          </div>
        </div>
      </nav>
      <span>&nbsp;</span>
      <Link
        className='btn btn-primary fw-bold'
        to='/profile'
        id='login'
        style={{ marginLeft: 2 }}
      >
        <i className='fas fa-user' /> {''}
        <span>Register</span>
      </Link>
      <span>&nbsp;</span>
      <Link
        className='btn btn-danger fw-bold'
        to='/login'
        id='login'
        onClick={logout}
        style={{ marginLeft: 2 }}
      >
        <i className='fas fa-sign-out-alt' /> {''}
        <span>Login</span>
      </Link>
    </div>
  );

  return (
    <div>{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}</div>
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
