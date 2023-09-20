import './App.css';
import { Navbar } from './Components/navbar';
import { Home } from './Components/Home';
import { Booking } from './Components/Booking';
import React from 'react';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { About } from './Components/about';
import Server from './Components/Server';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/booking' element={<Booking/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/server' element={<Server/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
