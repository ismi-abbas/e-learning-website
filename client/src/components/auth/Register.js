import React from 'react';

const Register = () => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Register</h4>
        </div>
        <div className='modal-body'>Modal content</div>
        <div className='modal-footer'>
          <button
            type='submit'
            id='register'
            class='btn btn-success'
            style='margin-bottom:15px'
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
