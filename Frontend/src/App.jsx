import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body'; 
import './App.css';

const App = () => {
  return (
    <>
   
   <div>
      <Navbar />
      <Body />
      <Footer/>
   </div>
      
    </> 
  );
};

export default App;
