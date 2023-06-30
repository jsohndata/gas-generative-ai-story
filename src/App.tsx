import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Motion from './pages/Motion';
import Err404 from './pages/Err404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <HashRouter>
      <Routes>        
        <Route path="/motion" element={<Motion />} />
        <Route path="/still" element={ <Home /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/*" element={ <Err404 /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
