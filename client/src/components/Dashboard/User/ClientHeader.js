import React from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logout } from '../../../actions/auth';

const ClientHeader = () => {
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
        <Link
         to='/subscribe'
         className='nav-link'
         id='navbarPage'
         data-bs-toggle
         data-bs-display
        >
         Subscribe Plan
        </Link>
       </li>
      </ul>
     </div>
     <div>
      <Link className='btn btn-danger fw-bold' to='/register' id='register'>
       Register
      </Link>
      <span>&nbsp;</span>
      <Link className='btn btn-success fw-bold' to='/login' id='login'>
       Login
      </Link>
     </div>
    </div>
   </nav>
  </div>
 );
};

export default ClientHeader;
