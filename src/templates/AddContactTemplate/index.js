import React from 'react';
import AddContactTemplateStyle from './addContactTemplateStyle';
import Header from '../../organisms/Header';

const AddContactTemplate = () => {
	return (
		<AddContactTemplateStyle>
			<Header backPath='/contacts' />
		</AddContactTemplateStyle>
	);
};

export default AddContactTemplate;
