import React from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';

const ClientHeader = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className='navbar navbar-expand-lg navbar-default '>
        <div className='container-fluid'>
          <Link to='#' className='navbar-brand'>
            {' '}
            <img
              src='#logo'
              alt
              className='d-inline-block align-text-top p-1'
            />
          </Link>
          <div className='collapse navbar-collapse ' id='navbar-default'>
            <ul className='nav navbar-nav navbar-nav-lg '>
              <li className='navbar-item dropdown  px-2 '>
                <Link
                  to='/'
                  className='nav-link'
                  id='navbarHome'
                  data-bs-toggle
                  data-bs-display
                >
                  Home <span className='carpet' />
                </Link>
              </li>
              {/* Courses Section */}
              <li className='navbar-item dropdown  px-2'>
                <a
                  href='#'
                  className='nav-link dropdown-toggle'
                  id='navbarPage'
                  data-bs-toggle
                  data-bs-display
                >
                  Courses
                </a>
                {/* List Items  of Courses Section */}
                <ul className='dropdown-menu dropdown-menu-arrow submenu'>
                  <div>
                    <li>
                      <a href='#' className='dropdown-item '>
                        Bootstrap
                      </a>{' '}
                    </li>
                    {/* Dropdown-items Of  web development Section */}
                    <li>
                      <a href='#' className='dropdown-item  '>
                        React
                      </a>
                    </li>
                  </div>
                </ul>
              </li>
              {/* Search Form */}
            </ul>
            <form className='d-flex align-items-center ms-lg-2  d-lg-invisible '>
              {/* <i class="bi bi-search"></i> */}
              <span className='position-absolute ps-3 search-icon'>
                <i className='bi bi-search' />
              </span>
              <input
                type='search'
                className='form-control ps-5'
                placeholder='Search Courses'
              />
            </form>
          </div>
          {/* Avatar Icons Right Side */}
          {/* UserPanel */}
          <div>
            <Link
              className='btn btn-danger fw-bold'
              to='/register'
              id='register'
            >
              Register
            </Link>
            <span>&nbsp;</span>
            <Link
              className='btn btn-success fw-bold'
              to='/ClientLoginModal'
              id='login'
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ClientHeader;
