import React from 'react';

const AdminHeader = () => {
  return (
    <div>
      {/* Navigarion Bar */}
      <nav className='navbar navbar-expand-lg navbar-default '>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            {' '}
            <img
              src='https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo.svg'
              alt
              className='d-inline-block align-text-top p-1'
            />
          </a>
          <div className='collapse navbar-collapse ' id='navbar-default'>
            <ul className='nav navbar-nav navbar-nav-lg '>
              <li className='navbar-item dropdown  px-2 '>
                <a
                  href='#'
                  className='nav-link'
                  id='navbarHome'
                  data-bs-toggle
                  data-bs-display
                >
                  Home <span className='carpet' />
                </a>
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
                  <li className='dropdown dropend sub-dropdown  '>
                    <a
                      href='#'
                      className='dropdown-item dropdown-list-group-item dropdown-toggle'
                    >
                      Courses
                    </a>
                    {/* Item Lists Of web development Section , SubDropDown */}
                    <ul className='dropdown-menu sub-dropdown-item'>
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
                </ul>
              </li>
              {/* 3 dot menu section */}
              <li className='navbar-item dropdown px-2'>
                <a
                  href='#'
                  className='nav-link '
                  id='navbarAccount'
                  data-bs-toggle
                  data-bs-display
                >
                  <i className='bi bi-three-dots' />
                </a>
                {/* List Items  of Accounts Section */}
                <ul className='dropdown-menu dropdown-menu-arrow submenu'>
                  <li className='dropdown dropend sub-dropdown '>
                    <div className='d-flex bd-highlight px-2 flex-icon-fiv'>
                      <div className='px-1 flex-shrink-1 bd-highlight'>
                        <i className='bi bi-file-earmark-text ' />
                      </div>
                      <div className=' w-100 bd-highlight pe-3 inline-size: max-content'>
                        <div className='d-flex flex-column bd-highlight ps-2'>
                          <div className=' bd-highlight'> Documentations</div>
                          <div className='bd-highlight'>
                            <p className>
                              <small>Browse all the documentations.</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex bd-highlight px-2 flex-icon-fiv'>
                      <div className=' px-1 flex-shrink-1 bd-highlight'>
                        <i className='bi bi-stack' />
                      </div>
                      <div className=' w-100 bd-highlight pe-2'>
                        <div className='d-flex flex-column bd-highlight ps-2'>
                          <div className='bd-highlight'>ChangeLog</div>
                          <div className='bd-highlight'>
                            <p>
                              <small>See Whats New</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
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
                      <i className='bi bi-collection  px-3' />
                      Status
                    </small>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#' />
                    <small className=' px-3 fw-bold'>
                      <i className='bi bi-person px-3' />
                      User
                    </small>
                  </li>
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

export default AdminHeader;
