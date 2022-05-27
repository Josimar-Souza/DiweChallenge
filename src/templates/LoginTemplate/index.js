import React from 'react';
import styles from './loginStyle';
import LoginForm from '../../organisms/LoginForm';
import Title from '../../atoms/Title';
import Paragraph from '../../atoms/Paragraph';

const LoginTemplate = () => {
  const {
    FormSection,
    LoginStyle,
    LogoSection,
    InstructionsSection,
  } = styles;
  return (
    <LoginStyle>
      <LogoSection></LogoSection>
      <FormSection>
        <InstructionsSection>
          <Title>Bem-vindo!</Title>
          <Paragraph
            textColor='gray'
            fontSize='1rem'
          >
            Faça login para acessar nossa plataforma
          </Paragraph>
        </InstructionsSection>
        <LoginForm />
      </FormSection>
    </LoginStyle>
  );
};

export default LoginTemplate;
