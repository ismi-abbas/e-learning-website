import React, { Component } from 'react';
import '../index.css';
import { Form, FormControl, Button, Container, Image } from 'react-bootstrap'; //Navigation from bootstrap

const Course = () => {
  return (
    <div className='container'>
      <div className='row mb-4'>
        <div className='col mt-5 mb-3'>
          <h3 className='mb-0 fw-semi-bold'>Courses</h3>
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
                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            2h:30m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Advance
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(13,245)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Claire Robertson</span>
                        </div>
                        <div className='col-auto ms-auto'>
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
                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            2h:46m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Advance
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(9,300)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Ted Hawkins</span>
                        </div>
                        <div className='col-auto ms-auto'>
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

                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            1h:30m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Beginner
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(4,500)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Ted Hawkins</span>
                        </div>
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
                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            2h:30m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Advance
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(13,245)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Claire Robertson</span>
                        </div>
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
                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            2h:30m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Advance
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(13,245)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Claire Robertson</span>
                        </div>
                        <div className='col-auto ms-auto'>
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
                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            2h:46m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Advance
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(9,300)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Ted Hawkins</span>
                        </div>
                        <div className='col-auto ms-auto'>
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

                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            1h:30m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Beginner
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(4,500)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Ted Hawkins</span>
                        </div>
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
                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            2h:30m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Advance
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(13,245)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Claire Robertson</span>
                        </div>
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
                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            2h:30m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Advance
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(13,245)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Claire Robertson</span>
                        </div>
                        <div className='col-auto ms-auto'>
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
                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            2h:46m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Advance
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(9,300)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Ted Hawkins</span>
                        </div>
                        <div className='col-auto ms-auto'>
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

                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            1h:30m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Beginner
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(4,500)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Ted Hawkins</span>
                        </div>
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
                      <ul className='mb-2 list-inline mt-3'>
                        <li className='list-inline-item'>
                          <span className='position-absolute search-icon'>
                            <i className='bi bi-clock fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary'>
                            2h:30m
                          </p>
                        </li>
                        <li className='list-inline-item ps-4'>
                          <span className='position-absolute search-icon '>
                            <i className='bi bi-reception-4 fs-6 fw-semi-bold'></i>
                          </span>
                          <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
                            Advance
                          </p>
                        </li>
                      </ul>

                      <div className='rating-section text-warning'>
                        <span>
                          <i className='bi bi-star-fill '></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          <i className='bi bi-star-fill'></i>
                          4.5
                        </span>
                        <span className='text-secondary'>(13,245)</span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='row align-items-center g-0'>
                        <div className='col-1'>
                          <Image
                            className='rounded-circle avatar-xs'
                            src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
                            height='33px'
                            alt=''
                            srcset=''
                          />
                        </div>
                        <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
                          <span>Claire Robertson</span>
                        </div>
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
  );
};

export default Course;
