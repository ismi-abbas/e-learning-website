import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import ClientHeader from './components/dashboard/user/ClientHeader';
import ClientDashboard from './components/dashboard/user/ClientDashboard';
import ClientMain from './components/dashboard/user/ClientMain';
import UserHeader from '../src/components/page/user/UserHeader';
import UserDashboard from '../src/components/page/user/UserDashboard';
import UserMain from '../src/components/page/user/UserMain';
import AdminHeader from './components/dashboard/admin/AdminHeader';
import AdminDashboard from '../src/components/layout/AdminDashboard';
import AdminSidebar from './components/dashboard/admin/AdminSidebar';
import AdminMain from '../src/components/layout/AdminMain';
import Course from '../src/components/Course';

//Parent component
function App() {
  return (
    <Router>
      <div className='landing'>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <AdminHeader />
              <AdminDashboard />
              <AdminSidebar />
              <AdminMain />
            </Route>
            <Route exact path='/user'>
              <UserHeader />
              <UserDashboard />
              <UserMain />
            </Route>
            <Route exact path='/admin'>
              <ClientHeader />
              <ClientDashboard />
              <ClientMain />
            </Route>
            <Route exact path='/course'>
              <UserHeader />
              <Course />
              <Footer />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
