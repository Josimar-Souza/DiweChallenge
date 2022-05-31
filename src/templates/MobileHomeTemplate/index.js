import React from 'react';
import styles from './mobileHomeTemplateStyle';
import Logo from '../../Images/Logo.png';
import Title from '../../atoms/Title';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';

const MobileHomeTemplate = () => {
	const { MobileHomeTemplateStyle, LogoImg } = styles;
	return (
		<MobileHomeTemplateStyle>
			<LogoImg src={ Logo } />
			<Title
				mobileFontSize='2.2rem'
			>
				Bem-vindo! É hora de começar uma nova experiência
			</Title>
			<Paragraph mobileFontSize='1.4rem'>
				Para ter acesso a todas as funcionalidades que podemos oferecer, faça login ou crie uma nova conta
			</Paragraph>
			<Button>Começar</Button>
		</MobileHomeTemplateStyle>
	);
};

export default MobileHomeTemplate;
