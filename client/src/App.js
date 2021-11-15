import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from './components/Admin/AdminHeader';
import AdminDashboard from './components/Admin/AdminDashboard';
import Footer from './components/Footer';
import AdminMain from './components/Admin/AdminMain';

//Parent component
function App() {
  return (
    <div class='wrapper'>
      <AdminHeader />
      <AdminDashboard />
      <AdminMain />
      <br />
      <Footer />
    </div>
  );
}

export default App;
