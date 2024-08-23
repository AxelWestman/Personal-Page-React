import './index.css';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar_component from './Components/Navbar_component';
import Header_component from './Components/Header_component';
import About_component from './Components/About_component';


function App() {
 


  return (
    <>
      <Navbar_component />
      <Header_component />
      <About_component />
    </>
  )
}

export default App;
