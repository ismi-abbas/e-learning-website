import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import SubscribePlan from './components/layout/SubscribePlan';
import ClientHeader from './components/dashboard/user/ClientHeader';
import ClientMain from './components/dashboard/user/ClientMain';
import ClientDashboard from './components/dashboard/user/ClientDashboard';
import Login from './components/auth/Login';
import Welcome from './components/layout/Welcome';
import AdminHeader from './components/dashboard/admin/AdminHeader';
import AdminMain from './components/layout/AdminMain';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/layout/Dashboard';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
 setAuthToken(localStorage.token);
}

//Parent component
const App = () => {
 // useEffect Hook
 useEffect(() => {
  store.dispatch(loadUser());
 }, []);

 return (
  <Provider store={store}>
   <Router>
    <div className='landing'>
     <div>
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
        <SubscribePlan />
       </Route>
       <Route path='/login'>
        <ClientHeader />
        <Welcome />
        <Login />
       </Route>
       <Route path='/admin'>
        <AdminHeader />
        <AdminMain />
       </Route>
       {/* PRIVATE ROUTE - ACCESS ONLY WITH AUTHETICATOR(TOKEN)*/}
       <PrivateRoute path='/dashboard' component={Dashboard} />
      </Switch>
     </div>
     <Footer />
    </div>
   </Router>
  </Provider>
 );
};

export default App;
