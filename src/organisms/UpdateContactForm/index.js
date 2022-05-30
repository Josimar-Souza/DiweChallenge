import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './updateContactFormStyle';
import Title from '../../atoms/Title';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import InputLabel from '../../molecules/InputLabel';
import ContactsAPI from '../../api/contactsAPI';
import getLocalStorageItems from '../../utils/getLocalStorageItems'

const baseURL = process.env.REACT_APP_BASE_URL;

const UpdateContactForm = ({ contactId }) => {
	const [contactInfo, setContactInfo] = useState({ name: '', email: '', mobile: '' });
	const contactsAPI = new ContactsAPI(baseURL, 10000);
	const { UpdateContactFormStyle, EmailPhoneContainer } = styles;

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
			<Title textColor='blue'>{`Atualize o contato de ${contactInfo.name}`}</Title>
			<Paragraph
				fontSize='20px'
			>
				Altere as informações para atualizar o contato!
			</Paragraph>
			<InputLabel
				label='Nome Completo'
				value={ contactInfo.name }
				width='90%'
			/>
			<EmailPhoneContainer>
				<InputLabel
					label='Email'
					value={ contactInfo.email }
					width='45%'
					type='email'
				/>
				<InputLabel
					label='Celular'
					value={ contactInfo.mobile }
					width='45%'
				/>
			</EmailPhoneContainer>
			<Button
				width='90%'
				margin='30px 0'
				scaleAnimation='scale(1.1, 1.1)'
			>
				Atualizar contato
			</Button>
		</UpdateContactFormStyle>
	);
};

UpdateContactForm.propTypes = {
	contactId: PropTypes.string.isRequired,
};

export default UpdateContactForm;
