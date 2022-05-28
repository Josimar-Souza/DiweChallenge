import React from 'react';
import { Routes as RouterRotes, Route, Navigate } from 'react-router-dom';
import Pages from '../pages';
import PublicRoutes from './publicRoutes';
import PrivateRoutes from './privateRoutes';

const Routes = () => {
  return (
    <RouterRotes>
      <Route exact path='/' element={ <Navigate to='/login' /> } />
      <Route exact path='/login' element={ <PublicRoutes /> }>
        <Route exact path='/login' element={ <Pages.LoginPage /> } />
      </Route>

      <Route exact path='/contacts' element={ <PrivateRoutes /> }>
        <Route exact path='/contacts' element={ <Pages.ContactsPage /> } />
      </Route>
    </RouterRotes>
  );
}

export default Routes;
