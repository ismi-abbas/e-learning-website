import React from 'react';
import { Link } from 'react-router-dom';
import logo from './landing-bg-1.png';

const LandingMain = () => {
 return (
  <div>
   <div className='px-4 pt-5 my-5 text-center border-bottom'>
    <h1 className='display-6 fw-bold'>Coding is Easy, Only with Us</h1>
    <div className='col-lg-6 mx-auto'>
     <p className='lead mb-4'>
      Learn to build a career toward technology skills. More than one course is
      offered on one platform, created for you to understand a career in IT.
     </p>
    </div>
    <div className='overflow-hidden' style={{ maxHeight: '30vh' }}>
     <div className='container px-5'>
      <img
       src={logo}
       className='img-fluid border rounded-3 shadow-lg mb-4'
       alt='Example image'
       width={700}
       height={500}
       loading='lazy'
      />
     </div>
    </div>
   </div>
   <div>
    <div className='container my-5'>
     <div className='row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg'>
      <div className='col-lg-7 p-3 p-lg-5 pt-lg-3'>
       <h1 className='display-6 fw-bold lh-1'>
        Learn <span>coding</span> skills with us
       </h1>
       <p className='lead'>
        Technology starts with Coding. Get the Coding skills you need to add
        skills. Interested in learning? Register and get guidance from our
        Tutors.
       </p>
       <div className='d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3'>
        <Link
         to='/register'
         type='button'
         className='btn btn-primary btn-lg px-4 me-md-2'>
         Sign Up
        </Link>
        <Link
         to='/courses'
         type='button'
         className='btn btn-lg btn-outline-secondary px-4'>
         Browse Course
        </Link>
       </div>
      </div>
      <div className='col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg'>
       <img className='rounded-3' src={logo} alt width={580} />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default LandingMain;
