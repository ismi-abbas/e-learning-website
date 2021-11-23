import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { GrCertificate } from 'react-icons/gr';

const ViewCoursePage = () => {
 return (
  <div className='container my-5 pt-5'>
   <div className='row mt-5'>
    <div className='col-lg-5 col-md-12'>
     <div>
      <img class='img-fluid w-100' src={'img/python.jpg'} />
      <ul className='list-unstyled'>
       <li>Instructor: Claire Robertson</li>
       <li className='py-3'>
        <BiTimeFive className='icon fa-2x' />
        Approx. 30 hours to complete
       </li>
       <li>
        <GrCertificate className='icon fa-2x' />
        Earn a Certificate upon completion
       </li>
      </ul>
     </div>
    </div>
    <div className='col-lg-6 col-md-12'>
     <h3 className='py-3'>The Python Course: Build web application</h3>
     <h4 className='mt-4 mb-3'>Description</h4>
     <span>
      Become a Python Programmer and learn one of employer's most requested
      skills of 2020!
      <br />
      This is a crisp, clear and comprehensive course for the Python programming
      language! Whether you have never programmed before, already know basic
      syntax, or want to learn about the advanced features of Python, this
      course is for you!
      <br />
      In this course we will teach you Python 3. This course will teach you
      Python in a practical manner, with every lecture comes a full coding
      screen-cast, corresponding code notebook, interesting quizzes and homework
      assignment! Learn in whatever manner is best for you!
     </span>

     <div>
      <button className='btn btn-dark my-2'>Enroll Now!</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ViewCoursePage;
