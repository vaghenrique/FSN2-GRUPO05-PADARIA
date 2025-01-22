import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './pages/Home';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/OtherPage' element={<Home/>}/>
          <Route path='/OtherPage2' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
