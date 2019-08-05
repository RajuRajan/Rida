import React from 'react';
import './App.css';
import Top_navbar from './components/Top_navbar/Top_navbar';
import {BrowserRouter as Router ,Route}from 'react-router-dom';
import BGA from'./components/BGA/Bga';
import Empty from './components/Empty'

function App() {

  return (
    <div>
             <Router>  
                    <Top_navbar/>
              </Router>
              

    </div>
  );
}

export default App;
