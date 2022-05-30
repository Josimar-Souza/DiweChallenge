import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UpdateContactFormStyle from './updateContactFormStyle';
import Title from '../../atoms/Title';
import ContactsAPI from '../../api/contactsAPI';
import getLocalStorageItems from '../../utils/getLocalStorageItems'

const baseURL = process.env.REACT_APP_BASE_URL;

const UpdateContactForm = ({ contactId }) => {
	const [contactInfo, setContactInfo] = useState({ name: '', email: '', mobile: '' });
	const contactsAPI = new ContactsAPI(baseURL, 10000);

	useEffect(() => {
		const getContact = async () => {
			const token = getLocalStorageItems('token');
			const { name, email, mobile } = await contactsAPI.getContactById(+contactId, token);
			setContactInfo({ name, email, mobile });
		}
		
		getContact();
	}, [])

	return (
		<UpdateContactFormStyle>
			<Title>{`Atualize o contato ${contactInfo.name}`}</Title>
		</UpdateContactFormStyle>
	);
};

UpdateContactForm.propTypes = {
	contactId: PropTypes.string.isRequired,
};

export default UpdateContactForm;
