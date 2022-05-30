import React from 'react';
import LoadingMessageStyle from './loadingMessageStyle';
import Paragraph from '../../atoms/Paragraph';

const LoadingMessage = () => {
	return (
		<LoadingMessageStyle>
			<Paragraph>Carregando...</Paragraph>
		</LoadingMessageStyle>
	);
};

export default LoadingMessage;
