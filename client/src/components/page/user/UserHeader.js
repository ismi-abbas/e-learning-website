import React from 'react';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  return (
    <div>
      {/* Navigarion Bar */}
      <nav className='navbar navbar-expand-lg navbar-default '>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            {' '}
            <img
              src='https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg'
              alt
              className='d-inline-block align-text-top p-1'
            />
          </Link>
          <div className='collapse navbar-collapse ' id='navbar-default'>
            <ul className='nav navbar-nav navbar-nav-lg '>
              <li className='navbar-item dropdown  px-2 '>
                <Link
                  href='/course'
                  className='nav-link'
                  id='navbarCourses'
                  data-bs-toggle
                  data-bs-display
                >
                  Courses <span className='carpet' />
                </Link>
              </li>
              <li className='navbar-item dropdown  px-2 '>
                <Link
                  href='/learning'
                  className='nav-link'
                  id='navbarLearning'
                  data-bs-toggle
                  data-bs-display
                >
                  My Learning <span className='carpet' />
                </Link>
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
          <ul className='nav navbar-nav navbar-right-wrap ms-auto flex-row pt-3 pe-3 position-absolute top-0 end-0 '>
            <li className='dropdown d-inline-block'>
              <a
                className='rounded-circle'
                href='#'
                data-bs-toggle='dropdown'
                data-bs-display='static'
              >
                <div className='avatar avatar-md avatar-indicators avatar-online'>
                  <span>
                    <img
                      className='rounded-circle'
                      src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg'
                      alt='avatar'
                      style={{ height: 33 }}
                    />
                  </span>
                </div>
              </a>
              <div className='dropdown-menu dropdown-menu-end shadow iconavatar position-absolute'>
                <div className='dropdown-item iconavatar-items'>
                  <div className='d-flex'>
                    <div
                      className='avatar avatar-md avatar-indicators avatar-online align-self-center iconavatar-items-list'
                      id='avatar-icon'
                    >
                      <img
                        className='rounded-circle'
                        alt='avatar'
                        src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-1.jpg'
                        height='33px'
                      />
                    </div>
                    <div>
                      <h6 className='px-3 mb-0'>Annette Black</h6>
                      <small className='text-muted px-3'>
                        annette@geeksui.com
                      </small>
                    </div>
                  </div>
                </div>
                <div className='dropdown-divider' />
                <ul className='list-unstyled'>
                  <li>
                    <a className='dropdown-item' href='#' />
                    <small className='px-3 fw-bold'>
                      <i className='bi bi-star px-3' />
                      Subcription
                    </small>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#' />
                    <small className=' px-3 fw-bold'>
                      <i className='bi bi-gear px-3' />
                      Settings
                    </small>
                  </li>
                </ul>
                <div className='dropdown-divider' />
                <div>
                  <a className='dropdown-item' href='#' />
                  <small className=' px-3 fw-bold'>
                    <i className='bi bi-power px-3' />
                    Sign Out
                  </small>
                </div>
              </div>
            </li>
            <button
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbar-default'
              className='navbar-toggler ms-auto'
              aria-controls='navbar-default'
              aria-expanded='false'
              aria-label='toggle navigation'
            >
              <span className='bi bi-list'> </span>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default UserHeader;
