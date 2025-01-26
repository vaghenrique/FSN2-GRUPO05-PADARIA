import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './pages/Home';
import OtherPage from './pages/OtherPage';
import Footer from './componentes/Footer';
import Direitos from './componentes/Direitos';
import './App.css';


import R01 from './assets/img/icon-facebook.png';
import R02 from './assets/img/icon-instagram.png';
import R03 from './assets/img/icon-linkedin.png';
import R04 from './assets/img/icon-github.png';
import R05 from './assets/img/icon-email.png';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/OtherPage' element={<OtherPage/>}/>
          <Route path='/OtherPage2' element={<Home/>}/>
        </Routes>
        <Footer
            title="5ª Dimensão Literária"
            text="Tudo que um bom leitor pode desejar: livros de todas as espécies e em preços abundantemente acessíveis. Aproveite as dimensões inteiras que estamos lhe oferecendo."
            Data={LogosData}
        />
        <Direitos 
          empresa="5ª Dimensão Literária"
        />
      </Router>
    </div>
  );
}

export default App;

const LogosData = [
  {
    id: 0,
    img: R01,
    alt: "Logo-Facebook"
  },
  {
    id: 1,
    img: R02,
    alt: "Logo-instagram"
  },
  {
    id: 2,
    img: R03,
    alt: "Logo-linkedin"
  },
  {
    id: 3,
    img: R04,
    alt: "Logo-github"
  },
  {
    id: 4,
    img: R05,
    alt: "Logo-email"
  }
]