import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';

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
