import { Outlet } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './pages/common/header.tsx';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
