import React from 'react';

function clickForMonthlySubscribe() {
  alert('You Clicked Me!');
  // direct to payment page
}

const subscribepageplan = () => {
  return (
    <div>
      <div className='row>'>
        <div className='column'>
          <h4>MONTHLY PLAN</h4>
          <ul>
            <li>Suitable for anyone who wants to get started</li>
            <li>Great for anyone to improve and add tech skills</li>
            <li>Fit for anyone to learn code through building projects</li>
          </ul>
          <p>
            RM50 <span>Normal Price: 120</span>
          </p>
          <ul>
            <li> Free Trial for 7 days</li>
            <li>Access unlimited class, unlimited everything</li>
            <li>Live sessions and recorded classes</li>
            <li>Wide variety of technology classes</li>
          </ul>
          <p>Learn through building projects with educators' guidance</p>
          {/* please link to the sign up form */}
          <button onClick={clickForMonthlySubscribe}>Subscribe Monthly</button>
        </div>
        <div className='column'>
          <h4>ANNUAL PLAN</h4>
          <ul>
            <li>Ideal for long-term plan to study tech</li>
            <li>Best for those that want to gain IT skill sets</li>
            <li>Suitable for those that want to become professional</li>
            <li>
              Suitable for those who want to learn a wide range of subjects
            </li>
          </ul>
          <p>
            RM360<span>Normal Price: 1500</span>
          </p>
          <ul>
            <li> Free Trial for 7 days</li>
            <li>Access unlimited class, unlimited everything</li>
            <li>Live sessions and recorded classes</li>
            <li>Wide variety of technology classes</li>
            <li>Better pricing plan. RM1 per day for 1 year</li>
          </ul>
          <p>
            Gain working professional skills to prepare for jobs and interviews
          </p>
          {/* please link to the sign up form */}
          <button>Subscribe Annually</button>
        </div>
      </div>
    </div>
  );
};

export default subscribepageplan;
