import React from 'react';
import './App.css';
import Top_navbar from './components/Top_navbar/Top_navbar';
import {BrowserRouter as Router}from 'react-router-dom';

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
