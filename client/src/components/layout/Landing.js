import React from 'react';
import ClientHeader from '../Dashboard/User/ClientHeader';
import ClientDashboard from '../Dashboard/User/ClientDashboard';
import ClientMain from '../Dashboard/User/ClientMain';

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
