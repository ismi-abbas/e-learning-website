import React from 'react';
import footer from './footer.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImOffice } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
 return (
  <div className='box'>
   <div className='container'>
    <div className='row align-items-centre'>
     <div className='col-lg-6 col-md-12'>
      <h2>WE HAVE ACHIEVE</h2>
      <p>5000 Students, 120 Countries, 30,000 Courses Published</p>
     </div>
    </div>
    <hr />
    <div className='row align-items-centre'>
     <div className='col-lg-6 col-md-12'>
      <h2 className='foot-community-contact'>Contact us</h2>

      <ul className='list-unstyled'>
       <li className='Ylearn'>YLearn Learning Academy</li>

       <li className='details'>
        <BsFillTelephoneFill className='icon' />
        011-2314569
       </li>

       <li className='details'>
        <ImOffice className='icon' />
        B-2, G-Floor, Jln Utara, Section 14,46200, Petaling Jaya, Selangor.
       </li>

       <li className='details'>
        <MdEmail className='icon' />
        ylearnlearningacademy@gmail.com
       </li>
      </ul>
     </div>
     <div className='col-lg-6 col-md-12'>
      <h2 className='foot-community-contact'>Community</h2>
      <ul className='list-unstyled details'>
       <li>Learners</li>
       <li>Partners</li>
       <li>Teaching Center</li>
       <li>Blog</li>
      </ul>
     </div>
    </div>
    <hr />
   </div>

   <footer className='d-flex flex-wrap mt-5 pt-3 '>
    <div className='container d-flex p-3 mb-2 box '>
     <div className='px-2 fs-6 mx-3 mb-1 flex-md-column'>
      {' '}
      <span>
       &copy; {new Date().getFullYear()} YLearn. All Rights Reserved.
      </span>
     </div>
     <div className='px-2 flex-grow-1 fs-6 mb-1'>
      <ul className='d-flex mx-3 list-unstyled justify-content-end flex-md-row flex-column'>
       <li className='mx-3'>
        <a className='text-decoration-none box' href='#'>
         Privacy
        </a>
       </li>
       <li className='mx-3'>
        <a className='text-decoration-none box ' href='#'>
         Terms
        </a>
       </li>
       <li className='mx-3'>
        <a className='text-decoration-none box' href='#'>
         Feedback
        </a>
       </li>
       <li className='mx-3'>
        <a className='text-decoration-none box' href='#'>
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
