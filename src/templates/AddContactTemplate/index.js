import React from 'react';
import { isMobile } from 'react-device-detect';
import AddContactTemplateStyle from './addContactTemplateStyle';
import AddContactForm from '../../organisms/AddContactForm';
import Header from '../../organisms/Header';
import MobileHeader from '../../organisms/MobileHeader';

const AddContactTemplate = () => {
	const getHeader = () => {
		if (isMobile) {
			return (
				<MobileHeader
					title='Cadastrar um novo contato'
					mobileFontSize='1.2rem'
					titleMargin='0 0 0 2rem'
					backPath='/contacts'
				/>
			);
		}
		
		return (
			<Header backPath='/contacts' />
		);
	}
	
	return (
		<AddContactTemplateStyle>
			{ getHeader() }
			<AddContactForm />
		</AddContactTemplateStyle>
	);
};

export default AddContactTemplate;
