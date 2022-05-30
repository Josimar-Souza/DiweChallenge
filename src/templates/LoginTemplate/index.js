import React from 'react';
import { isMobile } from 'react-device-detect';
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
	
	const getLogo = () => {
		console.log(isMobile);
		if (!isMobile) {
			return (
				<LogoSection>
					<LogoImage src={Logo} alt='Logo da plataforma' />
				</LogoSection>
			)
		}
		
		return null;
	}

	return (
		<LoginStyle>
			{ getLogo() }
			<FormSection>
				<InstructionsSection>
					<Title>
						{ !isMobile ? 'Bem-vindo!' : 'Bem-vindo(a)!' }
					</Title>
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
