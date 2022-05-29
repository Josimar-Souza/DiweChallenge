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
  } = props;
  return (
    <InputLabelStyle
      width={ width }
      height={ height }
    >
      <Paragraph>{ label }</Paragraph>
      <Input
        placeHolder={ placeHolder }
        onChange={ onChange }
        value={ value }
        type={ type }
        name={ name }
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
}

export default Email;