import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';


import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import Buses from './pages/ListPage';
import Drivers from './pages/Drivers';
import DriverDetail from './pages/DriverDetail';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='mt-5 body'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='buses' element={<Buses/>} />
          <Route path='drivers' element={<Drivers/>} />
          <Route path='drivers/:id' element={<DriverDetail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
