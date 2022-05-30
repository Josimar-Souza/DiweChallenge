import React from 'react';
import PropTypes from 'prop-types';
import UpdateContactsTemplateStyle from './updateContactsTemplateStyle';
import Header from '../../organisms/Header';
import UpdateContactForm from '../../organisms/UpdateContactForm';

const UpdateContactsTemplate = ({ contactId }) => {
	return (
		<UpdateContactsTemplateStyle>
			<Header backPath='/contacts' />
			<UpdateContactForm contactId={ contactId } />
		</UpdateContactsTemplateStyle>
	);
};

UpdateContactsTemplate.propTypes = {
	contactId: PropTypes.string.isRequired,
};

export default UpdateContactsTemplate;
