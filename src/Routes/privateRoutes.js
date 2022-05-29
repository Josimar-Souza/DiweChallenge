import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  let token;
  const getUser = () => {
    token = localStorage.getItem('token');
  }

  getUser();

  return (
    token ? <Outlet /> : <Navigate to='/login' />
  )
};

export default PrivateRoutes;
