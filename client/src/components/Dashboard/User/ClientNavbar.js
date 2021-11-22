import React from 'react';
import { Link } from 'react-router-dom';

const ClientNavbar = () => {
 return (
  <div>
   {/* Navigation Bar */}
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

export default ClientNavbar;
