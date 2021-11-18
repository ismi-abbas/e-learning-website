import React from 'react';
import subscribePlan from './subscribeplan.css';
import { FcApproval } from 'react-icons/fc';
import { FcCheckmark } from 'react-icons/fc';

function clickForMonthlySubscribe() {
  alert('You Clicked Me!');
  // direct to payment page
}

const SubscribePlan = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-8 monthly-plan align-items-centre'>
            <h4 className='plan-text'>MONTHLY PLAN</h4>
            <ul className='list-unstyled'>
              <li>
                <FcApproval className='icon' />
                Suitable for anyone who wants to get started
              </li>
              <li>
                <FcApproval className='icon' />
                Great for anyone to improve and add tech skills
              </li>
              <li>
                <FcApproval className='icon' />
                Fit for anyone to learn code through building projects
              </li>
            </ul>
            <p className='discount-price'>
              RM50 <span className='ori-price'>Normal Price: 120</span>
            </p>
            <ul className='list-unstyled'>
              <li>
                <FcCheckmark className='icon' />
                Free Trial for 7 days
              </li>
              <li>
                <FcCheckmark className='icon' />
                Access unlimited class, unlimited everything
              </li>
              <li>
                <FcCheckmark className='icon' />
                Live sessions and recorded classes
              </li>
              <li>
                <FcCheckmark className='icon' />
                Wide variety of technology classes
              </li>
            </ul>

            {/* please link to the sign up form */}
            <button className='btn' onClick={clickForMonthlySubscribe}>
              Subscribe Monthly
            </button>
          </div>

          <div className='col-lg-5 col-md-8 annual-plan align-items-centre'>
            <h4 className='plan-text'>ANNUAL PLAN</h4>
            <ul className='list-unstyled'>
              <li>
                <FcApproval className='icon' />
                Ideal for long-term plan to study tech
              </li>
              <li>
                <FcApproval className='icon' />
                Best for those that want to gain IT skill sets
              </li>
              <li>
                <FcApproval className='icon' />
                Suitable for those that want to become professional
              </li>
              <li>
                <FcApproval className='icon' />
                Suitable for those who want to learn a wide range of subjects
              </li>
            </ul>
            <p className='discount-price'>
              RM360<span className='ori-price'>Normal Price: 1500</span>
            </p>
            <ul className='list-unstyled'>
              <li>
                <FcCheckmark className='icon' />
                Free Trial for 7 days
              </li>
              <li>
                <FcCheckmark className='icon' />
                Access unlimited class, unlimited everything
              </li>
              <li>
                <FcCheckmark className='icon' />
                Live sessions and recorded classes
              </li>
              <li>
                <FcCheckmark className='icon' />
                Wide variety of technology classes
              </li>
              <li>
                <FcCheckmark className='icon' />
                Better pricing plan. RM1 per day for 1 year
              </li>
            </ul>

            {/* please link to the sign up form */}
            <button className='btn'>Subscribe Annually</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePlan;
