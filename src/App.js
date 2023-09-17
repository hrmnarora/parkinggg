import './App.css';
import { Navbar } from './Components/navbar';
import { Home } from './Components/Home';
import { Booking } from './Components/Booking';
import React from 'react';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Bottom } from './Components/Bottom';
import { About } from './Components/about';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/booking' element={<Booking/>}/>
      <Route exact path='/about' element={<About/>}/>

    </Routes>
    <Bottom/>
    </BrowserRouter>
  );
}

export default App;