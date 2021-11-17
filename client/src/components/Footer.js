import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <h2>WE HAVE ACHIEVE</h2>
            <p>5000 Students, 120 Countries, 30,000 Courses Published</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8'>
            <h2>Contact us</h2>
            <h4>YLearn Learning Application</h4>
            <ul>
              <li>011-2314569</li>
              <li>B-2, G-Floor, Jln Utara, Section 14</li>
              <li>46200, Petaling Jaya</li>
              <li>Selangor.</li>
              <li>ylearnlearning@gmail.com</li>
            </ul>
          </div>
          <div className='col-sm-4'>
            <h2>Community</h2>
            <ul>
              <li>Learners</li>
              <li>Partners</li>
              <li>Teaching Center</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className='d-flex flex-wrap mt-5 pt-3 '>
        <div className='container d-flex  '>
          <div className='px-2 bd-highlight text-secondary fs-6 mx-3 mb-1 flex-md-column'>
            {' '}
            <span>
              &copy; {new Date().getFullYear()} YLearn. All Rights Reserved.
            </span>
          </div>
          <div className='px-2 flex-grow-1 bd-highlight text-secondary fs-6 mx-3 mb-1 '>
            <ul className='d-flex mx-3 list-unstyled justify-content-end flex-md-row flex-column'>
              <li className='mx-3'>
                <a className='text-decoration-none text-secondary' href='#'>
                  Privacy
                </a>
              </li>
              <li className='mx-3'>
                <a className='text-decoration-none text-secondary' href='#'>
                  Terms
                </a>
              </li>
              <li className='mx-3'>
                <a className='text-decoration-none text-secondary' href='#'>
                  Feedback
                </a>
              </li>
              <li className='mx-3'>
                <a className='text-decoration-none text-secondary' href='#'>
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
