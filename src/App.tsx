import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <HashRouter>
      <Routes>        
        <Route path="/page" element={ <Page /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
