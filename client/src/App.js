import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../src/components//Footer';
import Register from '../src/components/auth/Register';
import SubscribePlan from '../src/components/layout/SubscribePlan';
import ClientHeader from '../src/components/Dashboard/User/ClientHeader';
import ClientMain from '../src/components/Dashboard/User/ClientMain';
import ClientDashboard from '../src/components/Dashboard/User/ClientDashboard';
import Login from '../src/components/auth/Login';
import Welcome from '../src/components/layout/Welcome';
import AdminHeader from '../src/components/Dashboard/Admin/AdminHeader';
import AdminMain from '../src/components/layout/AdminMain';
import PrivateRoute from '../src/components/routing/PrivateRoute';
import Profile from '../src/components/layout/Profile';
import UserHeader from '../src/components//page/user/UserHeader';
import UserMain from '../src/components//page/user/UserMain';
import UserDashboard from '../src/components//page/user/UserDashboard';
import UserLearning from '../src/components//page/user/UserLearning';
import AdminDashboard from '../src/components//layout/AdminDashboard';
import AdminSidebar from '../src/components/Dashboard/Admin/AdminSidebar';
import AdminUpload from './components/Dashboard/Admin/AdminUpload';

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
       </Route>
       <Route path='/login'>
        <ClientHeader />
        <Welcome />
        <Login />
       </Route>
       <Route path='/Admin'>
        <AdminHeader />
        <AdminMain />
       </Route>
       <Route path='/subscribe'>
        <ClientHeader />
        <Welcome />
        <SubscribePlan />
       </Route>
       <Route exact path='/learning'>
        <ClientHeader />
        <UserDashboard />
        <UserLearning />
       </Route>
       <Route exact path='/user'>
        <ClientHeader />
        <UserDashboard />
        <UserLearning />
       </Route>
       <Route exact path='/user'>
        <AdminHeader />
        <AdminUpload />
       </Route>
       {/* PRIVATE ROUTE - ACCESS ONLY WITH AUTHETICATOR(TOKEN)*/}
       <PrivateRoute path='/profile' component={Profile} />
      </Switch>
     </div>
     <Footer />
    </div>
   </Router>
  </Provider>
 );
};

export default App;
