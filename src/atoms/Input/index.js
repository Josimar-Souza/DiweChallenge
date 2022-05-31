import React from 'react';
import PropTypes from 'prop-types';
import InputStyle from './inputStyles';

const Input = (props) => {
  const {
    placeHolder,
    value,
    onChange,
    disabled,
    width,
    height,
    type,
    name,
    maxMobileWidth,
  } = props;
  return (
    <InputStyle
      placeholder={ placeHolder }
      value={ value }
      onChange={ onChange }
      disabled={ disabled }
      width={ width }
      height={ height }
      type={ type }
      name={ name }
      maxMobileWidth={ maxMobileWidth }
    />
  );
};

Input.defaultProps = {
  placeHolder: '',
  disabled: false,
  width: '100%',
  height: 'fit-content',
  type: 'text',
  name: '',
  maxMobileWidth: '96%',
};

Input.propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  maxMobileWidth: PropTypes.string,
};

export default Input;