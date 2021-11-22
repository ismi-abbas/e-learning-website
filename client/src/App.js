import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import SubscribePlan from './components/layout/SubscribePlan';
import ClientNavbar from './components/dashboard/user/ClientNavbar';
import Login from './components/auth/Login';
import Welcome from './components/layout/Welcome';
import AdminHeader from './components/dashboard/admin/AdminHeader';
import AdminMain from './components/layout/AdminMain';
import PrivateRoute from './components/routing/PrivateRoute';
import Profile from './components/layout/Profile';
import UserDashboard from '../src/components/page/user/UserDashboard';
import UserLearning from '../src/components/page/user/UserLearning';
import UploadCourse from './components/page/course/UploadCourse';
import Landing from './components/layout/Landing';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
 setAuthToken(localStorage.token);
}
// Parent component
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
       {/* Home Route */}
       <Route exact path='/'>
        <Landing />
       </Route>
       <Route path='/register'>
        <ClientNavbar />
        <Welcome />
        <Register />
       </Route>
       <Route path='/login'>
        <ClientNavbar />
        <Welcome />
        <Login />
       </Route>
       <Route path='/admin'>
        <AdminHeader />
        <AdminMain />
       </Route>
       <Route path='/subscribe'>
        <ClientNavbar />
        <Welcome />
        <SubscribePlan />
       </Route>
       <Route exact path='/learning'>
        <ClientNavbar />
        <UserDashboard />
        <UserLearning />
       </Route>
       <Route exact path='/user'>
        <ClientNavbar />
        <UserDashboard />
        <UserLearning />
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
