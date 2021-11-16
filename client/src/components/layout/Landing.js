import React from 'react';
import ClientHeader from '../Dashboard/user/ClientHeader';
import ClientDashboard from '../Dashboard/user/ClientDashboard';
import ClientMain from '../Dashboard/user/ClientMain';

const Landing = () => {
  return (
    <div>
      <ClientHeader />
      <ClientDashboard />
      <ClientMain />
    </div>
  );
};

export default Landing;
