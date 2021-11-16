import React from 'react';

const AdminSidebar = () => {
  return (
    <div>
      <aside className='main-sidebar sidebar-dark-primary elevation-4'>
        {/* Brand Logo */}
        <a href='product.html' className='brand-link'>
          <img
            src=''
            alt='YLearn Logo'
            className='brand-image img-square elevation-3'
            style={{ opacity: '.8' }}
          />
          <span className='brand-text font-weight-light'>YLearn</span>
        </a>
        {/* Sidebar */}
        <div className='sidebar'>
          {/* Sidebar user panel (optional) */}
          <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
            {/*user panel*/}
            <div className='image'>
              {/*div image*/}
              <img
                src='/Desktop/e-learning-website/client/src/images/user_icon.png'
                className='img-circle elevation-2'
                alt='User Image'
              />
            </div>
            {/*div image*/}
            <div className='info'>
              {/*div info*/}
              <a href='#' className='d-block'>
                User
              </a>
            </div>
            {/*div info*/}
          </div>
          {/*user panel*/}
          {/* Sidebar Menu */}
          <nav className='mt-2'>
            <ul
              className='nav nav-pills nav-sidebar flex-column'
              role='menu'
              data-accordion='false'
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className='nav-item'>
                <a href='#home' className='nav-link'>
                  <i className='nav-icon fas fa-home' />
                  <p>Home</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#courses' className='nav-link'>
                  <i className='nav-icon fas fa-book-reader' />
                  <p>Courses</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#subscribe' className='nav-link'>
                  <i class='nav-icon fas fa-plus-square' />
                  <p>Subscribe Plan</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
