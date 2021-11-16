import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from './components/Admin/AdminHeader';
import AdminDashboard from './components/layout/AdminDashboard';
import Footer from './components/Footer';
import AdminMain from './components/layout/AdminMain';
import SubscribePlan from './components/layout/SubscribePlan';
import Register from './components/auth/Register';
import ClientHeader from './components/Dashboard/ClientHeader';

//Parent component
function App() {
  return (
    <Fragment>
      <Landing />
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
