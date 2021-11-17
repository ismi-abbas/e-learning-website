import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <section className='bg-primary '>
        <div className='container'>
          <div className='row align-items-centre '>
            <div className='col-lg-6 col-md-12 mt-5'>
              <div className='py-2 py-lg-2 mt-2'>
                <h1 className='text-white fw-bold'>
                  Welcome to <span style={{ color: '#FFC300' }}> YLearn </span>
                  Academy
                </h1>
                <p className='text-white-50 mb-4 lead fw-semi-bold fs-5'>
                  A free education platform mainly focused on programming
                  language, suitable for all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
