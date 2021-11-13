import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

//Parent component
function App() {
  return (
    <div className='App container py-3'>
      <Header />
      <Home />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
