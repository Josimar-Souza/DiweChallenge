import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './loginFormStyle';
import InputLabel from '../../molecules/InputLabel';
import Button from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';
import UserAPI from '../../api/userAPI';
import ErrorCreator from '../../utils/ErrorCreator';

const baseURL = process.env.REACT_APP_BASE_URL;

const LoginForm = () => {
	const { LoginFormStyle, ErrorContainer } = styles;
	const navigate = useNavigate();

	const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
	const [error, setError] = useState({ status: false, message: 'Oi' });
	const userAPI = new UserAPI(baseURL, 10000);

	const onInputChange = ({ target: { name, value } }) => {
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const onButtonClick = async () => {
		console.log('Clicou!!');
		const token = await userAPI.login(userCredentials);
		
		if (token instanceof ErrorCreator) {
			setError({ status: true, message: token.message });
			return;
		}

		localStorage.setItem('token', token);
		navigate('/contacts');
	}

	return (
		<LoginFormStyle>
			<InputLabel 
				label='Email'
				placeHolder='Digite seu email'
				type='email'
				onChange={ onInputChange }
				value={ userCredentials.email }
        name='email'
			/>
			<InputLabel
				label='Senha'
				placeHolder='Digite sua senha'
				type='password'
				onChange={ onInputChange }
				value={ userCredentials.password }
        name='password'
			/>
			<Button
				onClick={ onButtonClick }
			>
				Fazer login
			</Button>
			<ErrorContainer>
				{
					error.status ? <Paragraph fontSize='18px' textColor='red'>{ error.message }</Paragraph> : null
				}
			</ErrorContainer>
		</LoginFormStyle>
	);
}

export default LoginForm;
