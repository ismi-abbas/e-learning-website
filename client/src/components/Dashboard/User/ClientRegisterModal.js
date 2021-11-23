import React, { Fragment, useState } from 'react';

const ClientRegisterModal = () => {
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

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Register</h4>
        </div>
        <div className='modal-body'>Modal content</div>
        <form className='form' action='create-profile'>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </form>

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

export default ClientRegisterModal;
