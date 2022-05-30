import React from 'react';
import UpdateContactsTemplateStyle from './updateContactsTemplateStyle';
import Header from '../../organisms/Header';

const UpdateContactsTemplate = () => {
	return (
		<UpdateContactsTemplateStyle>
			<Header backPath='/contacts' />
		</UpdateContactsTemplateStyle>
	);
};

export default UpdateContactsTemplate;
