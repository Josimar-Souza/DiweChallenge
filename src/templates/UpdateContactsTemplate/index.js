import React from 'react';
import UpdateContactsTemplateStyle from './updateContactsTemplateStyle';
import Header from '../../organisms/Header';
import UpdateContactForm from '../../organisms/UpdateContactForm';

const UpdateContactsTemplate = () => {
	return (
		<UpdateContactsTemplateStyle>
			<Header backPath='/contacts' />
			<UpdateContactForm />
		</UpdateContactsTemplateStyle>
	);
};

export default UpdateContactsTemplate;
