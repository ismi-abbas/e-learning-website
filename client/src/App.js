import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import ClientHeader from './components/dashboard/user/ClientHeader';
import ClientMain from './components/dashboard/user/ClientMain';
import ClientDashboard from './components/dashboard/user/ClientDashboard';
import Login from './components/auth/Login';
import Welcome from './components/layout/Welcome';

//Parent component
function App() {
  return (
    <Router>
      <div className='landing'>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <ClientHeader />
              <ClientDashboard />
              <ClientMain />
            </Route>
            <Route path='/register'>
              <ClientHeader />
              <Welcome />
              <Register />
            </Route>
            <Route path='/login'>
              <ClientHeader />
              <Welcome />
              <Login />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
