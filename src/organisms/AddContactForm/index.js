import React from 'react';
import styles from './AddContactFormStyle';
import Paragraph from '../../atoms/Paragraph';
import InputLabel from '../../molecules/InputLabel';
import Button from '../../atoms/Button';

const AddContactForm = () => {
	const { AddContactFormStyle, EmailPhoneSection } = styles;
	
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
			/>
			<EmailPhoneSection>
				<InputLabel
					width='45%'
					placeHolder='Digite o nome do contato'
					label='Nome Completo'
				/>
				<InputLabel
					width='45%'
					placeHolder='Digite o nome do contato'
					label='Nome Completo'
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
