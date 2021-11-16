import React from 'react';
import ClientHeader from '../Client/ClientHeader';
import ClientDashboard from '../Client/ClientDashboard';
import ClientMain from '../Client/ClientMain';

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
