import React from 'react';
import ClientHeader from '../dashboard/user/ClientHeader';
import ClientDashboard from '../dashboard/user/ClientDashboard';
import ClientMain from '../dashboard/user/ClientMain';

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
