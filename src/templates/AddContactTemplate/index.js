import React from 'react';
import AddContactTemplateStyle from './addContactTemplateStyle';
import AddContactForm from '../../organisms/AddContactForm';
import Header from '../../organisms/Header';

const AddContactTemplate = () => {
	return (
		<AddContactTemplateStyle>
			<Header backPath='/contacts' />
			<AddContactForm />
		</AddContactTemplateStyle>
	);
};

export default AddContactTemplate;
