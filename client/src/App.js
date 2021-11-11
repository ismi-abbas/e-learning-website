import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from 'react-bootstrap/Navbar'; //Navigation from bootstrap
import Nav from 'react-bootstrap/Nav'; //Navigation from bootstrap
import Footer from './components/Footer';

//Parent component
function App() {
  return (
    <div className='App container py-3'>
      <Header />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
