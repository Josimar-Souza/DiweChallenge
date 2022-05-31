import React from 'react';
import PropTypes from 'prop-types';
import InputLabelStyle from './inputLabelStyle';
import Paragraph from '../../atoms/Paragraph';
import Input from '../../atoms/Input';

const InputLabel = (props) => {
	const {
		width,
		height,
		onChange,
		value,
		name,
		placeHolder,
		label,
		type,
		labelTextColor,
		maxMobileWidth,
	} = props;
	return (
		<InputLabelStyle
			width={ width }
			height={ height }
		>
			<Paragraph mobileTextAlign='left' textColor={labelTextColor}>{ label }</Paragraph>
			<Input
				placeHolder={ placeHolder }
				onChange={ onChange }
				value={ value }
				type={ type }
				name={ name }
				maxMobileWidth={ maxMobileWidth }
			/>
		</InputLabelStyle>
	);
}

InputLabel.defaultProps = {
	width: '100%',
	height: 'fit-content',
	name: '',
	placeHolder: 'placeHolder',
	label: 'Label',
	type: 'text',
	labelTextColor: 'black',
	maxMobileWidth: '96%',
}

InputLabel.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	name: PropTypes.string,
	placeHolder: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	labelTextColor: PropTypes.string,
	maxMobileWidth: PropTypes.string,
}

export default InputLabel;
