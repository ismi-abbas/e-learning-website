import React from 'react';

const UserDashboard = () => {
  return (
    <div>
      <section className='bg-success '>
        <div className='container'>
          <div className='row align-items-centre '>
            <div className='col-lg-6 col-md-12 mt-5'>
              <div className='py-2 py-lg-2 mt-5'>
                <h1 className='text-white fw-bold'>Let's start learning!</h1>
                <p className='text-white-50 mb-4 lead fw-semi-bold fs-5'>
                  Upskill yourself with your choices of courses.
                </p>
              </div>
            </div>
            <div className=' col-lg-4 col-md-12'>
              <img
                className='img-fluid align-items-center'
                src='https://codescandy.com/geeks-bootstrap-5/assets/images/hero/hero-img.png'
                alt
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
