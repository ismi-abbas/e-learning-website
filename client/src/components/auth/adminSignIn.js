import React from 'react';
import { useState } from 'react';
import loginForm from './loginForm';

const adminSignIn = () => {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged In');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log('Details do not match');
      setError('Details do not match');
    }
  };

  const logout = () => {
    setUser({ name: '', email: '' });
  };

  return (
    <div className='app?'>
      {user.email != '' ? (
        <div>
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <loginForm Login={login} error={error} />
      )}
    </div>
  );
};

export default adminSignIn;
