import './index.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Navbar_component from './Components/Navbar_component';
import Header_component from './Components/Header_component';
import About_component from './Components/About_component';
import Technologies_component from './Components/Technologies_component';
import Footer_component from './Components/Footer_component';
import Projects_component from './Components/Projects_component';
import Contact_component from './Components/Contact_component';
import Header_about_component from './Components/Header_about_component';
import Work_component from './Components/Work_component';


function App() {


  return (
    <> 
    <Router>
        <Navbar_component />
        <Header_about_component />
        <Work_component />
        <Technologies_component />
        <Projects_component />
        <Contact_component />
        <Footer_component />
    </Router>    
    </>
  )
}

export default App;
