import React from 'react';
import './App.css';

//importa a logo para utilização no html
import logo from './assets/logo.svg'

//importa as rotas do React
import Routes from './routes';


//Componente é uma função que retorna um html
function App() {
  return (    
    <div className="container">
      <img src={logo} alt="AirCnC"></img>
      
      <div className="content">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
