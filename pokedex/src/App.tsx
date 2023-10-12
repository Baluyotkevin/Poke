import React from 'react';
import Navbar from './Sections/Navbar';
import Wrapper from './Sections/Wrapper';
import Footer from './Sections/Footer';
import Background from './Components/Background';
import "./Scss/index.scss"

function App() {
  return (
    <div className="main-container">
      <Background />
      <div className='app'>
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  );
}

export default App;
