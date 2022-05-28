import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './loginFormStyle';
import Email from '../../molecules/Email';
import Password from '../../molecules/Password';
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
      <Email
        name='email'
        value={ userCredentials.email }
        onChange={ onInputChange }
      />
      <Password
        name='password'
        value={ userCredentials.password }
        onChange={ onInputChange }
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
