import React, { useState } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // To use on change on all field
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Password didnt match');
    } else {
      console.log('Succcess');
    }
  };

  return (
    <div className='register-box container justify-content-center mb-5'>
      <div className='m-3 p-3'>
        <div className='row px-5'>
          <form className='sign-up' onSubmit={(e) => onSubmit(e)}>
            <h2 className='heading my-2'>Sign Up</h2>
            <div className='form-group fone mt-2'>
              <input
                type='name'
                className='form-control'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group fone mt-2'>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group fone mt-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group fone mt-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Confirm Password'
                name='password2'
                value={password2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button
              type='button'
              className='btn btn-success'
              onClick={onSubmit}
            >
              Sign Up Now
            </button>
            <p className='exist mt-4'>
              Existing user?{' '}
              <span>
                <Link to='/login'>Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
