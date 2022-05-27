import React from 'react';
import LoginFormStyle from './loginFormStyle';
import Email from '../../molecules/Email';
import Password from '../../molecules/Password';
import Button from '../../atoms/Button';

const LoginForm = () => {
  return (
    <LoginFormStyle>
      <Email/>
      <Password />
      <Button>Fazer login</Button>
    </LoginFormStyle>
  );
}

export default LoginForm;
