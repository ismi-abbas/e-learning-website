import React, { useState } from 'react';
import '../../index.css';
import { Link, Redirect } from 'react-router-dom';

// Connect with redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Alert from '../../components/layout/Alert';

const Register = ({ setAlert, register, isAuthenticated }) => {
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
   setAlert('Password didnt match', 'danger');
  } else {
   register({ name, email, password });
  }
 };

 if (isAuthenticated) {
  return <Redirect to='/profile' />;
 }

 return (
  <div className='content justify-content-center my-5'>
   <div className='m-3 p-3'>
    <div className='row px-5'>
     {/* SIGN UP FORM */}
     <form className='sign-up' onSubmit={(e) => onSubmit(e)}>
      <h2 className='heading my-2'>Sign Up</h2>
      <Alert />
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
       value='Register'
       onClick={onSubmit}
      >
       Sign Up Now
      </button>
      <p className='exist mt-4'>
       Existing user?
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

Register.propTypes = {
 setAlert: PropTypes.func.isRequired,
 register: PropTypes.func.isRequired,
 isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
 isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
