import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './mobileHeaderStyle';
import Title from '../../atoms/Title';
import ArrowLeft from '../../Images/Icons/chevron-left.svg';

const MobileHeader = ({ title, backPath }) => {
	const { MobileHeaderStyle, MobileHeaderIcon, MobileHeaderTitleContainer } = styles;
	const navigate = useNavigate();
	
	const onBackButtonClick = () => {
		navigate(backPath);
	}

	return (
		<MobileHeaderStyle>
			<MobileHeaderIcon
				onClick={ onBackButtonClick }
				src={ ArrowLeft }
			/>
			<MobileHeaderTitleContainer>
				<Title
					margin='0 0 0 4.5rem'
				>
					{ title }
				</Title>
			</MobileHeaderTitleContainer>
		</MobileHeaderStyle>
	);
}

MobileHeader.propTypes = {
	title: PropTypes.string.isRequired,
	backPath: PropTypes.string.isRequired,
};

export default MobileHeader;
