import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import SubscribePlan from './components/layout/SubscribePlan';
import ClientNavbar from './components/Dashboard/User/ClientNavbar';
import Login from './components/auth/Login';
import Welcome from './components/layout/Welcome';
import AdminHeader from './components/Dashboard/Admin/AdminHeader';
import AdminMain from './components/layout/AdminMain';
import PrivateRoute from './components/routing/PrivateRoute';
import Profile from './components/layout/Profile';
import UserDashboard from '../src/components/page/user/UserDashboard';
import UserLearning from '../src/components/page/user/UserLearning';
import Landing from './components/layout/Landing';
import About from './components/layout/About';
import Courses from './components/courses/Courses';
import Course from './components/course/Course';
import Navbar from './components/layout/Navbar';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import FileUpload from './components/page/course/FileUpload';
import ViewCoursePage from './components/layout/ViewCoursePage';
import VideoStream from './components/layout/VideoStream';

if (localStorage.token) {
 setAuthToken(localStorage.token);
}
// Parent component
const App = () => {
 // useEffect Hook
 useEffect(() => {
  window.scrollTo(0, 0);
  store.dispatch(loadUser());
 }, []);

 return (
  <Provider store={store}>
   <Router>
    <div className='landing'>
     <div>
      <Switch>
       <Route exact path='/'>
        <Landing />
       </Route>
       <PrivateRoute path='/profile' component={Profile} />
       <PrivateRoute path='/upload-course' component={FileUpload} />
       <PrivateRoute path='/course/:id' component={Course} />
       <PrivateRoute path='/stream' component={VideoStream} />
       <Route exact path='/about'>
        <ClientNavbar />
        <About />
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
       <Route path='/Admin'>
        <AdminHeader />
        <AdminMain />
       </Route>
       <Route path='/subscribe'>
        <ClientNavbar />
        <Welcome />
        <SubscribePlan />
       </Route>
       <Route exact path='/learning'>
        <Navbar />
        <UserDashboard />
        <Courses />
       </Route>
       <Route exact path='/user'>
        <ClientNavbar />
        <UserDashboard />
        <UserLearning />
       </Route>
       {/* Added a route to View Course page */}
       <Route exact path='/courses'>
        <ClientNavbar />
        <AdminMain />
       </Route>
      </Switch>
     </div>
     <Footer />
    </div>
   </Router>
  </Provider>
 );
};

export default App;
