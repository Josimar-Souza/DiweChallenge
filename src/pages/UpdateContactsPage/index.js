import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateContactsTemplate from '../../templates/UpdateContactsTemplate';

const UpdateContactsPage = () => {
	const { id } = useParams();

	return (
		<UpdateContactsTemplate contactId={ id } />
	);
};

export default UpdateContactsPage;
