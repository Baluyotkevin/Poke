import React from 'react';
import Navbar from './Sections/Navbar';
import Wrapper from './Sections/Wrapper';
import Footer from './Sections/Footer';
import Background from './Components/Background';
import "./Scss/index.scss"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Search from './Pages/Search';
import MyList from './Pages/MyList';
import Pokemon from './Pages/Pokemon';
import About from './Pages/About';
import Compare from './Pages/Compare';

function App() {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route element={<Search/> } path='/Search' />
            <Route element={<MyList /> } path='/List' />
            <Route element={<About /> } path='/About' />
            <Route element={<Compare /> } path='/Compare' />
            <Route element={<Pokemon /> } path='/Pokemon/:id' />
            <Route element={<Navigate to="pokemon/1"/>} path="*" />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
