import React, { useState } from 'react';
import '../../index.css';
import { Link, Redirect } from 'react-router-dom';

// Connect to redux
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
 const [formData, setFormData] = useState({
  email: '',
  password: '',
 });

 const { email, password } = formData;

 const onChange = (e) =>
  setFormData({
   ...formData,
   [e.target.name]: e.target.value, // To use on change on all field
  });

 const onSubmit = async (e) => {
  e.preventDefault();
  login(email, password);
 };

 //  Redirect if logged in
 if (isAuthenticated) {
  return <Redirect to='/dashboard' />;
 }
 return (
  <section className='content justify-content-center mb-5'>
   <div className='m-3 p-3'>
    <div className='row px-5'>
     <form className='sign-up' onSubmit={(e) => onSubmit(e)}>
      <h2 className='heading my-2'>Sign In </h2>
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
      <button type='submit' className='btn btn-success' value='Login'>
       Sign In
      </button>
     </form>
     <p className='exist mt-4'>
      No Account?
      <span>
       <Link to='/register'>Register Here</Link>
      </span>
     </p>
    </div>
   </div>
  </section>
 );
};

login.PropTypes = {
 login: PropTypes.func.isRequired,
 isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
 isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
