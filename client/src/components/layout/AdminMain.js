import React from 'react';

const AdminMain = () => {
 return (
  <div>
   <section className='pt-lg-12 pb-lg-3 pt-8 pb-6'>
    <div className='container'>
     <div className='row mb-4'>
      <div className='col mt-5 mb-3'>
       <h3 className='mb-0 fw-semi-bold'>Recommended to you</h3>
      </div>
     </div>
     {/* Card Section */}
     <div className='container-fluid'>
      <div>
       <div className='row'>
        {/* First-Card */}
        <div className='col-xl-3 col-md-6  mb-3'>
         <div className='card'>
          <img
           className='img-fluid rounded-3'
           src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
           alt
          />
          <div className='card-body'>
           <h6 className='card-title'>
            The Python Course: build web application
           </h6>
           <ul className='mb-2 list-inline mt-3'>
            <li className='list-inline-item'>
             <span className='position-absolute search-icon'>
              <i className='bi bi-clock fs-6 fw-semi-bold' />
             </span>
             <p className='ps-4 fs-6 fw-semi-bold text-secondary'>2h:30m</p>
            </li>
            <li className='list-inline-item ps-4'>
             <span className='position-absolute search-icon '>
              <i
               className='bi bi-reception-4 fs-6 fw-semi-bold'
               style={{ color: 'blueviolet' }}
              />
             </span>
             <p className='ps-4 fs-6 fw-semi-bold text-secondary '>Advance</p>
            </li>
           </ul>
           <div className='rating-section text-warning'>
            <span>
             <i className='bi bi-star-fill ' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             4.5
            </span>
            <span className='text-secondary'>(13,245)</span>
           </div>
          </div>
          {/* Card footer */}
          <div className='card-footer'>
           <div className='row align-items-center g-0'>
            <div className='col-1'>
             <img
              className='rounded-circle avatar-xs'
              src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
              height='33px'
              alt
              srcSet
             />
            </div>
            <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
             <span>Claire Robertson</span>
            </div>
            <div className='col-auto ms-auto'>
             <a href='#'>
              <i className='bi bi-bookmark' />
             </a>
            </div>
           </div>
          </div>
         </div>
        </div>
        {/* Second Card */}
        <div className='col-xl-3 col-md-6  mb-3'>
         <div className='card'>
          <img
           className='img-fluid rounded-3'
           src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-graphql.jpg'
           alt
          />
          <div className='card-body'>
           <h6 className='card-title'>
            GraphQL: Introduction to graphQL for beginners
           </h6>
           <ul className='mb-2 list-inline mt-3'>
            <li className='list-inline-item'>
             <span className='position-absolute search-icon'>
              <i className='bi bi-clock fs-6 fw-semi-bold' />
             </span>
             <p className='ps-4 fs-6 fw-semi-bold text-secondary'>2h:46m</p>
            </li>
            <li className='list-inline-item ps-4'>
             <span className='position-absolute search-icon '>
              <i
               className='bi bi-reception-4 fs-6 fw-semi-bold'
               style={{ color: 'blueviolet' }}
              />
             </span>
             <p className='ps-4 fs-6 fw-semi-bold text-secondary '>Advance</p>
            </li>
           </ul>
           <div className='rating-section text-warning'>
            <span>
             <i className='bi bi-star-fill ' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             4.5
            </span>
            <span className='text-secondary'>(9,300)</span>
           </div>
          </div>
          {/* Card footer */}
          <div className='card-footer'>
           <div className='row align-items-center g-0'>
            <div className='col-1'>
             <img
              className='rounded-circle avatar-xs'
              src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-2.jpg'
              height='33px'
              alt
              srcSet
             />
            </div>
            <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
             <span>Ted Hawkins</span>
            </div>
            <div className='col-auto ms-auto'>
             <a href='#'>
              <i className='bi bi-bookmark' />
             </a>
            </div>
           </div>
          </div>
         </div>
        </div>
        {/* Third-card */}
        <div className='col-xl-3 col-md-6  mb-3'>
         <div className='card'>
          <img
           className='img-fluid rounded-3'
           src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-angular.jpg'
           alt
          />
          <div className='card-body'>
           <h6 className='card-title'>
            Angular - the complete guide for beginner
           </h6>
           <ul className='mb-2 list-inline mt-3'>
            <li className='list-inline-item'>
             <span className='position-absolute search-icon'>
              <i className='bi bi-clock fs-6 fw-semi-bold' />
             </span>
             <p className='ps-4 fs-6 fw-semi-bold text-secondary'>1h:30m</p>
            </li>
            <li className='list-inline-item ps-4'>
             <span className='position-absolute search-icon '>
              <i
               className='bi bi-reception-4 fs-6 fw-semi-bold'
               style={{ color: 'blueviolet' }}
              />
             </span>
             <p className='ps-4 fs-6 fw-semi-bold text-secondary '>Beginner</p>
            </li>
           </ul>
           <div className='rating-section text-warning'>
            <span>
             <i className='bi bi-star-fill ' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             4.5
            </span>
            <span className='text-secondary'>(4,500)</span>
           </div>
          </div>
          {/* Card footer */}
          <div className='card-footer'>
           <div className='row align-items-center g-0'>
            <div className='col-1'>
             <img
              className='rounded-circle avatar-xs'
              src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg'
              height='33px'
              alt
              srcSet
             />
            </div>
            <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
             <span>Ted Hawkins</span>
            </div>
            <div className='col-auto ms-auto'>
             <a href='#'>
              <i className='bi bi-bookmark' />
             </a>
            </div>
           </div>
          </div>
         </div>
        </div>
        {/* Fourth Card */}
        <div className='col-xl-3 col-md-6 mb-3'>
         <div className='card'>
          <img
           className='img-fluid rounded-3'
           src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-python.jpg'
           alt
          />
          <div className='card-body'>
           <h6 className='card-title'>
            The Python Course: build web application
           </h6>
           <ul className='mb-2 list-inline mt-3'>
            <li className='list-inline-item'>
             <span className='position-absolute search-icon'>
              <i className='bi bi-clock fs-6 fw-semi-bold' />
             </span>
             <p className='ps-4 fs-6 fw-semi-bold text-secondary'>2h:30m</p>
            </li>
            <li className='list-inline-item ps-4'>
             <span className='position-absolute search-icon '>
              <i
               className='bi bi-reception-4 fs-6 fw-semi-bold'
               style={{ color: 'blueviolet' }}
              />
             </span>
             <p className='ps-4 fs-6 fw-semi-bold text-secondary '>Advance</p>
            </li>
           </ul>
           <div className='rating-section text-warning'>
            <span>
             <i className='bi bi-star-fill ' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             <i className='bi bi-star-fill' />
             4.5
            </span>
            <span className='text-secondary'>(13,245)</span>
           </div>
          </div>
          {/* Card footer */}
          <div className='card-footer'>
           <div className='row align-items-center g-0'>
            <div className='col-1'>
             <img
              className='rounded-circle avatar-xs'
              src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
              height='33px'
              alt
              srcSet
             />
            </div>
            <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
             <span>Claire Robertson</span>
            </div>
            <div className='col-auto ms-auto'>
             <a href='#'>
              <i className='bi bi-bookmark' />
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
   </section>
   <section className='pt-lg-12 pb-lg-3 pt-8 pb-6'>
    <div className='container'>
     <div className='row mb-4'>
      <div className='col mt-5 mb-3'>
       <h3 className='mb-0 fw-semi-bold'>Most Popular</h3>
      </div>
     </div>
     {/* Card Section */}
     <div className='col-12'>
      <div className='row'>
       {/* First-Card */}
       <div className='col-xl-3 col-md-6 mb-3'>
        <div className='card '>
         <img
          className='img-fluid rounded-3'
          src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-wordpress.jpg'
          alt
         />
         <div className='card-body bg-white bd-highlight'>
          <h6 className='card-title'>
           Wordpress complete theme &amp; plugin development
          </h6>
          <ul className='mb-2 list-inline mt-3'>
           <li className='list-inline-item'>
            <span className='position-absolute search-icon'>
             <i className='bi bi-clock fs-6 fw-semi-bold' />
            </span>
            <p className='ps-4 fs-6 fw-semi-bold text-secondary'>2h:30m</p>
           </li>
           <li className='list-inline-item ps-4'>
            <span className='position-absolute search-icon '>
             <i
              className='bi bi-reception-4 fs-6 fw-semi-bold'
              style={{ color: 'blueviolet' }}
             />
            </span>
            <p className='ps-4 fs-6 fw-semi-bold text-secondary '>Advance</p>
           </li>
          </ul>
          <div className='rating-section text-warning'>
           <span>
            <i className='bi bi-star-fill ' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            4.5
           </span>
           <span className='text-secondary'>(13,245)</span>
          </div>
         </div>
         {/* Card footer */}
         <div className='card-footer'>
          <div className='row align-items-center g-0'>
           <div className='col-1'>
            <img
             className='rounded-circle avatar-xs'
             src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-8.jpg'
             height='33px'
             alt
             srcSet
            />
           </div>
           <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
            <span>Claire Robertson</span>
           </div>
           <div className='col-auto ms-auto'>
            <a href='#'>
             <i className='bi bi-bookmark' />
            </a>
           </div>
          </div>
         </div>
        </div>
       </div>
       {/* Second Card */}
       <div className='col-xl-3 col-md-6 mb-3'>
        <div className='card '>
         <img
          className='img-fluid rounded-3'
          src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-javascript.jpg'
          alt
         />
         <div className='card-body bg-white bd-highlight'>
          <h6 className='card-title'>Getting Started with JavaScript</h6>
          <ul className='mb-2 list-inline mt-3'>
           <li className='list-inline-item'>
            <span className='position-absolute search-icon'>
             <i className='bi bi-clock fs-6 fw-semi-bold' />
            </span>
            <p className='ps-4 fs-6 fw-semi-bold text-secondary'>2h:46m</p>
           </li>
           <li className='list-inline-item ps-4'>
            <span className='position-absolute search-icon '>
             <i
              className='bi bi-reception-4 fs-6 fw-semi-bold'
              style={{ color: 'blueviolet' }}
             />
            </span>
            <p className='ps-4 fs-6 fw-semi-bold text-secondary '>Advance</p>
           </li>
          </ul>
          <div className='rating-section text-warning'>
           <span>
            <i className='bi bi-star-fill ' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            4.5
           </span>
           <span className='text-secondary'>(13,245)</span>
          </div>
         </div>
         {/* Card footer */}
         <div className='card-footer'>
          <div className='row align-items-center g-0'>
           <div className='col-1'>
            <img
             className='rounded-circle avatar-xs'
             src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-8.jpg'
             height='33px'
             alt
             srcSet
            />
           </div>
           <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
            <span>Claire Robertson</span>
           </div>
           <div className='col-auto ms-auto'>
            <a href='#'>
             <i className='bi bi-bookmark' />
            </a>
           </div>
          </div>
         </div>
        </div>
       </div>
       {/* Third-card */}
       <div className='col-xl-3 col-md-6 mb-3'>
        <div className='card'>
         <img
          className='img-fluid rounded-3'
          src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-css.jpg'
          alt
         />
         <div className='card-body'>
          <h6 className='card-title'>
           CSS: ultimate CSS course from beginner to advanced
          </h6>
          <ul className='mb-2 list-inline mt-3'>
           <li className='list-inline-item'>
            <span className='position-absolute search-icon'>
             <i className='bi bi-clock fs-6 fw-semi-bold' />
            </span>
            <p className='ps-4 fs-6 fw-semi-bold text-secondary'>1h:30m</p>
           </li>
           <li className='list-inline-item ps-4'>
            <span className='position-absolute search-icon '>
             <i
              className='bi bi-reception-4 fs-6 fw-semi-bold'
              style={{ color: 'blueviolet' }}
             />
            </span>
            <p className='ps-4 fs-6 fw-semi-bold text-secondary '>Beginner</p>
           </li>
          </ul>
          <div className='rating-section text-warning'>
           <span>
            <i className='bi bi-star-fill ' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            4.5
           </span>
           <span className='text-secondary'>(4,500)</span>
          </div>
         </div>
         {/* Card footer */}
         <div className='card-footer'>
          <div className='row align-items-center g-0'>
           <div className='col-1'>
            <img
             className='rounded-circle avatar-xs'
             src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-3.jpg'
             height='33px'
             alt
             srcSet
            />
           </div>
           <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
            <span>Ted Hawkins</span>
           </div>
           <div className='col-auto ms-auto'>
            <a href='#'>
             <i className='bi bi-bookmark' />
            </a>
           </div>
          </div>
         </div>
        </div>
       </div>
       {/* Fourth Card */}
       <div className='col-xl-3 col-md-6 mb-3'>
        <div className='card'>
         <img
          className='img-fluid rounded-3'
          src='https://codescandy.com/geeks-bootstrap-5/assets/images/course/course-wordpress.jpg'
          alt
         />
         <div className='card-body'>
          <h6 className='card-title text-break'>
           Wordpress: complete theme &amp; plugin development
          </h6>
          <ul className='mb-2 list-inline mt-3'>
           <li className='list-inline-item'>
            <span className='position-absolute search-icon'>
             <i className='bi bi-clock fs-6 fw-semi-bold' />
            </span>
            <p className='ps-4 fs-6 fw-semi-bold text-secondary'>2h:30m</p>
           </li>
           <li className='list-inline-item ps-4'>
            <span className='position-absolute search-icon '>
             <i
              className='bi bi-reception-4 fs-6 fw-semi-bold'
              style={{ color: 'blueviolet' }}
             />
            </span>
            <p className='ps-4 fs-6 fw-semi-bold text-secondary '>
             Intermediate
            </p>
           </li>
          </ul>
          <div className='rating-section text-warning'>
           <span>
            <i className='bi bi-star-fill ' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            <i className='bi bi-star-fill' />
            4.5
           </span>
           <span className='text-secondary'>(13,245)</span>
          </div>
         </div>
         {/* Card footer */}
         <div className='card-footer'>
          <div className='row align-items-center g-0'>
           <div className='col-1'>
            <img
             className='rounded-circle avatar-xs'
             src='https://codescandy.com/geeks-bootstrap-5/assets/images/avatar/avatar-4.jpg'
             height='33px'
             alt
             srcSet
            />
           </div>
           <div className='col-auto ps-4 text-muted fw-semi-bold fs-6'>
            <span>Claire Robertson</span>
           </div>
           <div className='col-auto ms-auto'>
            <a href='#'>
             <i className='bi bi-bookmark' />
            </a>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};

export default AdminMain;
