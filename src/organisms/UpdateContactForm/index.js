import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './updateContactFormStyle';
import Title from '../../atoms/Title';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import InputLabel from '../../molecules/InputLabel';
import ContactsAPI from '../../api/contactsAPI';
import getLocalStorageItems from '../../utils/getLocalStorageItems'
import ErrorCreator from '../../utils/ErrorCreator';
import LoadingMessage from '../../molecules/LoadingMessage';

const baseURL = process.env.REACT_APP_BASE_URL;

const UpdateContactForm = ({ contactId }) => {
	const [contactInfo, setContactInfo] = useState({ name: '', email: '', mobile: '' });
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const contactsAPI = new ContactsAPI(baseURL, 10000);
	const navigate = useNavigate();
	const { UpdateContactFormStyle, EmailPhoneContainer } = styles;

	useEffect(() => {
		const getContact = async () => {
			const token = getLocalStorageItems('token');
			const { name, email, mobile } = await contactsAPI.getContactById(+contactId, token);
			setContactInfo({ name, email, mobile });
			setName(name);
		}
		
		getContact();
	}, [])
	
	const onInputChange = ({ target: { name, value } }) => {
		setContactInfo({ ...contactInfo, [name]: value });
	};
	
	const onUpdateButtonClick = async () => {
		const token = getLocalStorageItems('token');
		const response = await contactsAPI.editContact(contactInfo, +contactId, token);

		if (response instanceof ErrorCreator) {
			setMessage(response.message);
			resetMessage();
			return;
		}
		
		setMessage('Contato atualizado com successo!');
		redirect();
	};
	
	const redirect = () => {
		setTimeout(() => {
			navigate('/contacts');
		}, 3000);
	};
	
	const resetMessage = () => {
		setTimeout(() => {
			setMessage('');
		}, 3000);
	}
	
	const getForm = () => {
		if (contactInfo.email !== '') {
			return (
				<UpdateContactFormStyle>
					<Title textColor='blue'>{`Atualize o contato de ${name}`}</Title>
					<Paragraph
						fontSize='20px'
					>
						Altere as informações para atualizar o contato!
					</Paragraph>
					<Paragraph
						fontSize='18px'
					>
						{ message }
					</Paragraph>
					<InputLabel
						label='Nome Completo'
						value={ contactInfo.name }
						width='90%'
						onChange={ onInputChange }
						name='name'
					/>
					<EmailPhoneContainer>
						<InputLabel
							label='Email'
							value={ contactInfo.email }
							width='45%'
							type='email'
							onChange={ onInputChange }
							name='email'
						/>
						<InputLabel
							label='Celular'
							value={ contactInfo.mobile }
							width='45%'
							onChange={ onInputChange }
							name='mobile'
						/>
					</EmailPhoneContainer>
					<Button
						width='90%'
						margin='30px 0'
						scaleAnimation='scale(1.1, 1.1)'
						onClick={ onUpdateButtonClick }
					>
						Atualizar contato
					</Button>
				</UpdateContactFormStyle>
			);
		}
		
		return (
			<LoadingMessage />
		);
	}
	
	return getForm()
};

UpdateContactForm.propTypes = {
	contactId: PropTypes.string.isRequired,
};

export default UpdateContactForm;
