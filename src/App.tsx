import React from 'react';
import './styles/App.scss';
import Home from './pages/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';

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
