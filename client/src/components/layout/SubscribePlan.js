import React from 'react';
import { FcApproval } from 'react-icons/fc';
import { FcCheckmark } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import '../../index.css';

const SubscribePlan = () => {
 return (
  <section>
   <div className='my-4 d-flex justify-content-center'>
    <div className='row'>
     <div className='content col-lg-5 col-md-8 plan align-items-centre'>
      <h4 className=' p-3 mb-2 bg-dark text-white'>MONTHLY PLAN</h4>

      <ul className='list-unstyled'>
       <li>
        <FcApproval className='icon fa-2x' />
        Suitable for anyone who wants to get started
       </li>
       <li>
        <FcApproval className='icon fa-2x' />
        Great for anyone to improve and add tech skills
       </li>
       <li>
        <FcApproval className='icon fa-2x' />
        Fit for anyone to learn code through building projects
       </li>
      </ul>
      <strong>
       <h3 className='discount-price'>RM50</h3>
      </strong>
      <del>
       <span className='ori-price'>Normal Price: 120</span>
      </del>
      <ul className='list-unstyled pt-4'>
       <li>
        <FcCheckmark className='icon fa-2x' />
        Free Trial for 7 days
       </li>
       <li>
        <FcCheckmark className='icon fa-2x' />
        Access unlimited class, unlimited everything
       </li>
       <li>
        <FcCheckmark className='icon fa-2x' />
        Live sessions and recorded classes
       </li>
       <li>
        <FcCheckmark className='icon fa-2x' />
        Wide variety of technology classes
       </li>
      </ul>

      {/* please link to the sign up form */}
      <div className='button-wrapper'>
       <Link to='/register' className='btn btn-primary'>
        Subscribe Monthly
       </Link>
      </div>
     </div>

     <div className='content col-lg-5 col-md-8 plan align-items-centre'>
      <h4 className='p-3 mb-2 bg-dark text-white'>ANNUAL PLAN</h4>
      <ul className='list-unstyled'>
       <li>
        <FcApproval className='icon fa-2x' />
        Ideal for long-term plan to study tech
       </li>
       <li>
        <FcApproval className='icon fa-2x' />
        Best for those that want to gain IT skill sets
       </li>
       <li>
        <FcApproval className='icon fa-2x' />
        Suitable for those that want to become professional
       </li>
       <li>
        <FcApproval className='icon fa-2x' />
        Suitable for those who want to learn a wide range of subjects
       </li>
      </ul>
      <h3 className='discount-price'>RM360</h3>
      <span className='ori-price'>
       <del>Normal Price: 1500</del>
      </span>

      <ul className='list-unstyled pt-4'>
       <li>
        <FcCheckmark className='icon fa-2x' />
        Free Trial for 7 days
       </li>
       <li>
        <FcCheckmark className='icon fa-2x' />
        Access unlimited class, unlimited everything
       </li>
       <li>
        <FcCheckmark className='icon fa-2x' />
        Live sessions and recorded classes
       </li>
       <li>
        <FcCheckmark className='icon fa-2x' />
        Wide variety of technology classes
       </li>
       <li>
        <FcCheckmark className='icon fa-2x' />
        Better pricing plan. RM1 per day for 1 year
       </li>
      </ul>

      {/* please link to the sign up form */}
      <div className='button-wrapper'>
       <Link to='/register' className='btn btn-primary'>
        Subscribe Annually
       </Link>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default SubscribePlan;
