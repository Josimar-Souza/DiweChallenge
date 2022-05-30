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
			<Route exact path='/contacts/add' element={ <PrivateRoutes /> }>
        <Route exact path='/contacts/add' element={ <Pages.AddContactsPage /> } />
			</Route>
			<Route exact path='/contacts/edit/:id' element={ <PrivateRoutes /> }>
				<Route exact path='/contacts/edit/:id' element={ <Pages.UpdateContactsPage /> } />
			</Route>
		</RouterRotes>
	);
}

export default Routes;
