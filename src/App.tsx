import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
