import React, { Fragment } from 'react';
import Modal from 'react-responsive-modal';
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
        <a
         href='#'
         className='nav-link dropdown-toggle'
         id='navbarPage'
         data-bs-toggle
         data-bs-display
        >
         Courses
        </a>
        {/* List Items  of Courses Section */}
        <ul className='dropdown-menu dropdown-menu-arrow submenu'>
         <div>
          <li>
           <a href='#' className='dropdown-item '>
            Bootstrap
           </a>{' '}
          </li>
          {/* Dropdown-items Of  web development Section */}
          <li>
           <a href='#' className='dropdown-item  '>
            React
           </a>
          </li>
         </div>
        </ul>
       </li>
       {/* Search Form */}
      </ul>
      <form className='d-flex align-items-center ms-lg-2  d-lg-invisible '>
       {/* <i class="bi bi-search"></i> */}
       <span className='position-absolute ps-3 search-icon'>
        <i className='bi bi-search' />
       </span>
       <input
        type='search'
        className='form-control ps-5'
        placeholder='Search Courses'
       />
      </form>
     </div>
     {/* Avatar Icons Right Side */}
     {/* UserPanel */}
     {/* Dashboard Button */}
     <div>
      <span>&nbsp;</span>
      <Link
       className='btn btn-primary fw-bold'
       to='/login'
       id='login'
       onClick={logout}
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
