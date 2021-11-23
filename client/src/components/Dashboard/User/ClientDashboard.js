import React from 'react';

const Dashboard = () => {
 return (
  <div>
   <section className='bg-primary '>
    <div className='container'>
     <div className='row align-items-centre '>
      <div className='col-lg-6 col-md-12 mt-5'>
       <div className='py-2 py-lg-2 mt-5'>
        <h1 className='text-white fw-bold'>
         Welcome to <span style={{ color: '#FFC300' }}> YLearn </span> Learning
         Academy
        </h1>
        <p className='text-white-50 mb-4 lead fw-semi-bold fs-5'>
         An education platform mainly focused on programming language, suitable
         for all ages.
        </p>
        <a className='btn btn-warning fw-bold' href='#' id='BrowsePlan'>
         Browse Plans
        </a>
       </div>
      </div>
      <div className=' col-lg-6 col-md-12'>
       <img
        className='img-fluid align-items-center'
        src='https://codescandy.com/geeks-bootstrap-5/assets/images/hero/hero-img.png'
        alt
       />
      </div>
     </div>
    </div>
   </section>
   {/* 2 container */}
   <div className='bg-white py-4 shadow-sm'>
    <div className='container'>
     <div className='row align-items-center'>
      {/* First Col */}
      <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
       <div className='d-flex align-items-center'>
        <span className='icon-lg bg-white rounded-circle text-center text-dark-warning fs-3 p-2 shadow-lg'>
         <i className='bi bi-camera-video' />
        </span>
        <div className='ms-3'>
         <h5 className='mb-0 fw-semi-bold '>1000 online courses</h5>
         <div className='mb-0 text-secondary'>
          Enjoy a variety of fresh topics
         </div>
        </div>
       </div>
      </div>
      {/* Second Col */}
      <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
       <div className='d-flex align-items-center'>
        <span className='icon-lg bg-white rounded-circle text-center text-dark-warning fs-3 p-2 shadow-lg '>
         <i className='bi bi-people-fill' />
        </span>
        <div className='ms-3'>
         <h5 className='mb-0 fw-semi-bold '>Excellent Modules</h5>
         <div className='mb-0 text-secondary'>
          Find The Right Module For You
         </div>
        </div>
       </div>
      </div>
      {/* Third col */}
      <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
       <div className='d-flex align-items-center'>
        <span className=' icon-lg bg-white rounded-circle text-center text-dark-warning fs-3 p-2 shadow-lg'>
         <i className='bi bi-clock' />
        </span>
        <div className='ms-3'>
         <h5 className='mb-0 fw-semi-bold'>Lifetime Access</h5>
         <div className='mb-0 text-secondary'>Learn on your schedule</div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Dashboard;
