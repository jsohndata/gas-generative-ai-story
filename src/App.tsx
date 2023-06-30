import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/Page';
import Err404 from './pages/Err404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/visual-story/page" element={ <Page /> } />
        <Route path="/visual-story/" element={ <Home /> } />
        <Route path="/visual-story/*" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
