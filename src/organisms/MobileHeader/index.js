import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './mobileHeaderStyle';
import Title from '../../atoms/Title';
import ArrowLeft from '../../Images/Icons/chevron-left.svg';

const MobileHeader = (props) => {
	const {
		title,
		backPath,
		titleMargin,
		mobileFontSize,
	} = props;

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
					margin={ titleMargin }
					mobileFontSize={ mobileFontSize }
				>
					{ title }
				</Title>
			</MobileHeaderTitleContainer>
		</MobileHeaderStyle>
	);
}

MobileHeader.defaultProps = {
	titleMargin: '0 0 0 4.5rem',
	mobileFontSize: '3rem',
}

MobileHeader.propTypes = {
	title: PropTypes.string.isRequired,
	backPath: PropTypes.string.isRequired,
	titleMargin: PropTypes.string,
	mobileFontSize: PropTypes.string,
};

export default MobileHeader;
