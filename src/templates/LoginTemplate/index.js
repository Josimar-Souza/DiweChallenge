import React from 'react';
import styles from './loginStyle';
import LoginForm from '../../organisms/LoginForm';
import Title from '../../atoms/Title';
import Paragraph from '../../atoms/Paragraph';
import Logo from '../../Images/Logo.png';

const LoginTemplate = () => {
  const {
    FormSection,
    LoginStyle,
    LogoSection,
    InstructionsSection,
    LogoImage,
  } = styles;

  return (
    <LoginStyle>
      <LogoSection>
        <LogoImage src={Logo} alt='Logo da plataforma' />
      </LogoSection>
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
