import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; //Navigation from bootstrap

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className='text-white'>WE HAVE ACHIEVE</h2>
          <p className='text-white'>
            5000 Students, 120 Countries, 30,000 Courses Published
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='text-white'>Contact us</h2>
          <h4 className='text-white'>YLearn Learning Application</h4>
          <ul>
            <li className='text-white'>011-2314569</li>
            <li className='text-white'>B-2, G-Floor, Jln Utara, Section 14</li>
            <li className='text-white'>46200, Petaling Jaya</li>
            <li className='text-white'>Selangor.</li>
            <li className='text-white'>ylearnlearning@gmail.com</li>
          </ul>
        </Col>
        <Col>
          <h2 className='text-white'>Community</h2>
          <ul>
            <li className='text-white'>Learners</li>
            <li className='text-white'>Partners</li>
            <li className='text-white'>Teaching Center</li>
            <li className='text-white'>Blog</li>
          </ul>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <div className='text-white'>
            &copy; {new Date().getFullYear()} YLearn Learning Application | All
            Right Reserved | Terms of Service | Privacy
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

// 5000 learners, 4000 graduare , 120 countries reach, 940 course publiched
//become an instructor
