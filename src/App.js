import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicRoutes from './Routes/publicRoutes';
import PrivateRoutes from './Routes/privateRoutes';
import Pages from './pages';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={ <Navigate to='/login' /> } />
      <Route exact path='/login' element={ <PublicRoutes /> }>
        <Route exact path='/login' element={ <Pages.LoginPage /> } />
      </Route>

      <Route exact path='/contacts' element={ <PrivateRoutes /> }>
        <Route exact path='/contacts' element={ <Pages.ContactsPage /> } />
      </Route>
    </Routes>
  );
}

export default App;
