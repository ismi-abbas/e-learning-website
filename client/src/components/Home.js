import React, { Component } from 'react';
import Slider from 'react-slick';
import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Form,
  FormControl,
  Button,
  Container,
  Card,
  Carousel,
  CarouselItem,
  Image,
  Row,
  Col,
} from 'react-bootstrap'; //Navigation from bootstrap

const Home = () => {
  return (
    <div>
      <div className='container bg-primary'>
        <div className='row align-items-centre '>
          <div className='col-lg-6 col-md-12 mt-5'>
            <div className='py-2 py-lg-2 mt-5'>
              <h1 className='text-white fw-bold'>
                Welcome to YLearn Learning Application
              </h1>
              <p className='text-white-50 mb-4 lead fw-semi-bold fs-5'>
                Hand-picked Instructor and expertly crafted courses, designed
                for the modern students and entrepreneur.
              </p>
              <a
                className='btn btn-success fw-bold'
                href='#register'
                id='register'
              >
                Register
              </a>
              <a className='btn bg-white fw-bold' href='#login'>
                Are You a Member?
              </a>
            </div>
          </div>
          <div className=' col-lg-6 col-md-12'>
            <Image
              className='img-fluid align-items-center'
              src='https://codescandy.com/geeks-bootstrap-5/assets/images/hero/hero-img.png'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='bg-white row align-items-center'>
          <div className='bg-white col-lg-4 col-md-6 col-sm-12 mb-2'>
            <div className='bg-white d-flex align-items-center'>
              <span className='icon-lg bg-white rounded-circle text-center text-dark-warning fs-3 p-2 shadow-lg'>
                <i className='-bi bi-camera-video'></i>
              </span>
              <div className='ms-3'>
                <h5 className='bg-white mb-0 fw-semi-bold '>
                  30,000 online courses
                </h5>
                <div className='bg-white mb-0 text-secondary'>
                  Enjoy a variety of fresh topics
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white col-lg-4 col-md-6 col-sm-12 mb-2'>
            <div className='bg-white d-flex align-items-center'>
              <span className='icon-lg bg-white rounded-circle text-center text-dark-warning fs-3 p-2 shadow-lg '>
                <i className='bi bi-people-fill'></i>
              </span>
              <div className='ms-3'>
                <h5 className='bg-white mb-0 fw-semi-bold '>
                  Expert Instruction
                </h5>
                <div className='bg-white mb-0 text-secondary'>
                  Find The Right Instructor For You
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white col-lg-4 col-md-6 col-sm-12 mb-2'>
            <div className='bg-white d-flex align-items-center'>
              <span className=' icon-lg bg-white rounded-circle text-center text-dark-warning fs-3 p-2 shadow-lg'>
                <i className='bi bi-clock'></i>
              </span>
              <div className='ms-3'>
                <h5 className='bg-white mb-0 fw-semi-bold'>Lifetime Access</h5>
                <div className='bg-white mb-0 text-secondary'>
                  Learn on your schedule
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row mb-4'>
          <div className='col mt-5 mb-3'>
            <h3 className='mb-0 fw-semi-bold text-white'>Recommended to you</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 text-start '>
            <a
              className='btn btn-white shadow-lg rounded-circle mb-3 mr-1'
              data-bs-target='#carouselExampleIndicators'
              role='button'
              data-bs-slide='prev'
            >
              <i className='bi bi-arrow-left'></i>
            </a>
          </div>
          <div className='col-6 text-end'>
            <a
              className='btn btn-white shadow-lg mb-3 ms-auto rounded-circle'
              data-bs-target='#carouselExampleIndicators'
              role='button'
              data-bs-slide='next'
            >
              <i className='bi bi-arrow-right'></i>
            </a>
          </div>
        </div>
        <div className='container-fluid'>
          <div
            id='carouselExampleIndicators'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='row'>
                  <div className='col-xl-3 col-md-6  mb-3'>
                    <div className='card'>
                      <Image
                        className='img-fluid rounded-3'
                        src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
                        alt=''
                      />
                      <div className='card-body'>
                        <h6 className='card-title'>
                          The Python Course: build web application
                        </h6>
                        <ul className='course-card mb-2 list-inline mt-3'>
                          <li className='course-card list-inline-item'>
                            <span className='position-absolute search-icon'>
                              <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                            </span>
                            <p className='course-card ps-4 fs-6 fw-semi-bold text-secondary'>
                              2h:30m
                            </p>
                          </li>
                          <li className='course-card list-inline-item ps-4'>
                            <span className='position-absolute search-icon '>
                              <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                            </span>
                            <p className='course-card ps-4 fs-6 fw-semi-bold text-secondary '>
                              Advance
                            </p>
                          </li>
                        </ul>

                        <div className='course-card rating-section text-warning'>
                          <span className='course-card'>
                            <i className='bi bi-star-fill '></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            4.5
                          </span>
                          <span className='course-card text-secondary'>
                            (13,245)
                          </span>
                        </div>
                      </div>
                      <div className='card-footer bg-white'>
                        <div className='course-card row align-items-center g-0'>
                          <div className='col-1'>
                            <Image
                              className='rounded-circle avatar-xs'
                              src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
                              height='33px'
                              alt=''
                              srcset=''
                            />
                          </div>
                          <Row className='course-card col-auto ms-auto'>
                            <span className='course-card'>
                              Claire Robertson
                            </span>
                          </Row>
                          <div className='course-card col-auto ms-auto'>
                            <a href='#'>
                              <i className='bi bi-bookmark'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-md-6  mb-3'>
                    <div className='card'>
                      <Image
                        className='img-fluid rounded-3'
                        src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg'
                        alt=''
                      />
                      <div className='card-body'>
                        <h6 className='card-title'>
                          GraphQL: Introduction to graphQL for beginners
                        </h6>
                        <ul className='course-card mb-2 list-inline mt-3'>
                          <li className='course-card list-inline-item'>
                            <span className='position-absolute search-icon'>
                              <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                            </span>
                            <p className='course-card ps-4 fs-6 fw-semi-bold text-secondary'>
                              2h:46m
                            </p>
                          </li>
                          <li className='course-card list-inline-item ps-4'>
                            <span className='position-absolute search-icon '>
                              <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                            </span>
                            <p className='course-card ps-4 fs-6 fw-semi-bold text-secondary '>
                              Advance
                            </p>
                          </li>
                        </ul>

                        <div className='course-card rating-section text-warning'>
                          <span className='course-card'>
                            <i className='bi bi-star-fill '></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            4.5
                          </span>
                          <span className='course-card text-secondary'>
                            (9,300)
                          </span>
                        </div>
                      </div>
                      <div className='card-footer bg-white'>
                        <div className='course-card row align-items-center g-0'>
                          <div className='col-1'>
                            <Image
                              className='rounded-circle avatar-xs'
                              src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg'
                              height='33px'
                              alt=''
                              srcset=''
                            />
                          </div>
                          <Row className='course-card col-auto ms-auto'>
                            <span className='course-card'>Ted Hawkins</span>
                          </Row>
                          <div className='course-card col-auto ms-auto'>
                            <a href='#'>
                              <i className='bi bi-bookmark'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-md-6  mb-3'>
                    <div className='card'>
                      <Image
                        className='img-fluid rounded-3'
                        src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg'
                        alt=''
                      />
                      <div className='card-body'>
                        <h6 className='card-title'>
                          Angular - the complete guide for beginner
                        </h6>

                        <ul className='course-card mb-2 list-inline mt-3'>
                          <li className='course-card list-inline-item'>
                            <span className='position-absolute search-icon'>
                              <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                            </span>
                            <p className='course-card ps-4 fs-6 fw-semi-bold text-secondary'>
                              1h:30m
                            </p>
                          </li>
                          <li className='course-card list-inline-item ps-4'>
                            <span className='position-absolute search-icon '>
                              <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                            </span>
                            <p className='course-card ps-4 fs-6 fw-semi-bold text-secondary '>
                              Beginner
                            </p>
                          </li>
                        </ul>

                        <div className='course-card rating-section text-warning'>
                          <span className='course-card'>
                            <i className='bi bi-star-fill '></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            4.5
                          </span>
                          <span className='course-card text-secondary'>
                            (4,500)
                          </span>
                        </div>
                      </div>
                      <div className='card-footer bg-white'>
                        <div className='course-card row align-items-center g-0'>
                          <div className='col-1'>
                            <Image
                              className='rounded-circle avatar-xs'
                              src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg'
                              height='33px'
                              alt=''
                              srcset=''
                            />
                          </div>
                          <Row className='course-card col-auto ms-auto'>
                            <span className='course-card'>Angelina Jolie</span>
                          </Row>
                          <div className='col-auto ms-auto'>
                            <a href='#'>
                              <i className='bi bi-bookmark'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-md-6 mb-3'>
                    <div className='card'>
                      <Image
                        className='img-fluid rounded-3'
                        src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
                        alt=''
                      />
                      <div className='card-body'>
                        <h6 className='card-title'>
                          The Python Course: build web application
                        </h6>
                        <ul className='course-card mb-2 list-inline mt-3'>
                          <li className='course-card list-inline-item'>
                            <span className='position-absolute search-icon'>
                              <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                            </span>
                            <p className='course-card ps-4 fs-6 fw-semi-bold text-secondary'>
                              2h:30m
                            </p>
                          </li>
                          <li className='course-card list-inline-item ps-4'>
                            <span className='position-absolute search-icon '>
                              <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                            </span>
                            <p className='course-card ps-4 fs-6 fw-semi-bold text-secondary '>
                              Advance
                            </p>
                          </li>
                        </ul>

                        <div className='course-card rating-section text-warning'>
                          <span className='course-card '>
                            <i className='bi bi-star-fill '></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            <i className='bi bi-star-fill'></i>
                            4.5
                          </span>
                          <span className='course-card text-secondary'>
                            (13,245)
                          </span>
                        </div>
                      </div>
                      <div className='card-footer'>
                        <div className='course-card row align-items-center g-0'>
                          <div className='col-1'>
                            <Image
                              className='rounded-circle avatar-xs'
                              src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
                              height='33px'
                              alt=''
                              srcset=''
                            />
                          </div>
                          <Row className='course-card col-auto ms-auto'>
                            <span className='course-card'>Brad Pitt</span>
                          </Row>
                          <div className='col-auto ms-auto'>
                            <a href='#'>
                              <i className='bi bi-bookmark'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
