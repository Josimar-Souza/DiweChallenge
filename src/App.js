import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Pages from './pages';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={ <Navigate to='/login' /> } />
      <Route exact path='/login' element={ <Pages.LoginPage /> } />
    </Routes>
  );
}

export default App;
