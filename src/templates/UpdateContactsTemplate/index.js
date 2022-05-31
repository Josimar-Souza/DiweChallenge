import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import UpdateContactsTemplateStyle from './updateContactsTemplateStyle';
import Header from '../../organisms/Header';
import MobileHeader from '../../organisms/MobileHeader';
import UpdateContactForm from '../../organisms/UpdateContactForm';

const UpdateContactsTemplate = ({ contactId }) => {
	const getHeader = () => {
		if (!isMobile) {
			return (
				<Header backPath='/contacts' />
			);
		}
		
		return (
			<MobileHeader
				backPath='/contacts'
				title='Atualizar contato'
				mobileFontSize='1.6rem'
				titleMargin='0 0 0 2rem'
			/>
		);
	}
	
	return (
		<UpdateContactsTemplateStyle>
			{ getHeader() }
			<UpdateContactForm contactId={ contactId } />
		</UpdateContactsTemplateStyle>
	);
};

UpdateContactsTemplate.propTypes = {
	contactId: PropTypes.string.isRequired,
};

export default UpdateContactsTemplate;
