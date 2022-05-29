import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddContactFormStyle';
import Paragraph from '../../atoms/Paragraph';
import InputLabel from '../../molecules/InputLabel';
import Button from '../../atoms/Button';
import ContactsAPI from '../../api/contactsAPI';
import ErrorCreator from '../../utils/ErrorCreator';

const baseURL = process.env.REACT_APP_BASE_URL;

const AddContactForm = () => {
	const { AddContactFormStyle, EmailPhoneSection } = styles;
	const [contactInfo, setContactInfo] = useState({ name: '', email: '', mobile: '' });
	const [message, setMessage] = useState('');
	const contactAPI = new ContactsAPI(baseURL, 10000);
	const navigate = useNavigate();
	
	const onInputChange = ({ target: { name, value } }) => {
		setContactInfo({ ...contactInfo, [name]: value });
	};
	
	const getToken = () => {
		return localStorage.getItem('token');
	};
	
	const onAddContactClick = async () => {
		const { email, mobile, name } = contactInfo;
		if (email == '' || mobile == '' || name == '') {
			setMessage('*Todos os campos são obrigatórios')
			resetMessage();
			return;
		}
		
		const response = await contactAPI.createNewContact(contactInfo, getToken());
		
		if (response instanceof ErrorCreator) {
			setMessage(response.message);
			resetMessage();
		}
		setMessage('Contato cadastrado com successo!');
		redirect();
	};
	
	const resetMessage = () => {
		setTimeout(() => {
			setMessage('');
		}, 3000);
	}
	
	const redirect = () => {
		setTimeout(() => {
			navigate('/contacts');
		}, 3000);
	}
	
	return (
		<AddContactFormStyle>
			<Paragraph>Cadastre um novo contato</Paragraph>
			<Paragraph
				textColor='gray'
				fontSize='18px'
			>
				Preencha as informações para cadastrar um novo contato
			</Paragraph>
			<Paragraph
				fontSize='20px'
			>
				{ message }
			</Paragraph>
			<InputLabel
				width='90%'
				placeHolder='Digite o nome do contato'
				label='Nome Completo'
				name='name'
				onChange={ onInputChange }
				value={ contactInfo.name }
			/>
			<EmailPhoneSection>
				<InputLabel
					width='45%'
					placeHolder='Digite o email'
					label='Email'
					name='email'
					onChange={ onInputChange }
					value={ contactInfo.email }
					type='email'
				/>
				<InputLabel
					width='45%'
					placeHolder='Digite o celular'
					label='Celular'
					name='mobile'
					onChange={ onInputChange }
					value={ contactInfo.mobile }
				/>
			</EmailPhoneSection>
			<Button
				width='90%'
				scaleAnimation='scale(1.1, 1.1)'
				onClick={ onAddContactClick }
			>
				Cadastrar contato
			</Button>
		</AddContactFormStyle>
	);
};

export default AddContactForm;
