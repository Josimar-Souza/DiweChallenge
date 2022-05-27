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
  } = props;
  return (
    <InputStyle
      placeholder={ placeHolder }
      value={ value }
      onChange={ onChange }
      disabled={ disabled }
      width={ width }
      height={ height }
    />
  );
};

Input.defaultProps = {
  placeHolder: '',
  disabled: false,
  width: '100%',
  height: '20px',
};

Input.propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Input;