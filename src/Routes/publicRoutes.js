import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoutes = () => {
  let token;
  const getUser = () => {
    token = localStorage.getItem('token');
  }

  getUser();

  return (
    token ? <Navigate to='/contacts' /> : <Outlet />
  )
};

export default PublicRoutes;
