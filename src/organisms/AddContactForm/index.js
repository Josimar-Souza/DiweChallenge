import React, { useState } from 'react';
import styles from './AddContactFormStyle';
import Paragraph from '../../atoms/Paragraph';
import InputLabel from '../../molecules/InputLabel';
import Button from '../../atoms/Button';

const AddContactForm = () => {
	const { AddContactFormStyle, EmailPhoneSection } = styles;
	const [contactInfo, setContactInfo] = useState({ name: '', email: '', mobile: '' });
	
	const onInputChange = ({ target: { name, value } }) => {
		setContactInfo({ ...contactInfo, [name]: value });
	};
	
	return (
		<AddContactFormStyle>
			<Paragraph>Cadastre um novo contato</Paragraph>
			<Paragraph
				textColor='gray'
				fontSize='18px'
			>
				Preencha as informações para cadastrar um novo contato
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
			>
				Cadastrar contato
			</Button>
		</AddContactFormStyle>
	);
};

export default AddContactForm;
