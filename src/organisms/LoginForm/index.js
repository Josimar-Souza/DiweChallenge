import React, { useState } from 'react';
import LoginFormStyle from './loginFormStyle';
import Email from '../../molecules/Email';
import Password from '../../molecules/Password';
import Button from '../../atoms/Button';

const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const onInputChange = ({ target: { name, value } }) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };

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
      <Button>Fazer login</Button>
    </LoginFormStyle>
  );
}

export default LoginForm;
