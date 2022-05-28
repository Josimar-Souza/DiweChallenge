import React from 'react';
import PropTypes from 'prop-types';
import EmailStyled from './emailStyle';
import Paragraph from '../../atoms/Paragraph';
import Input from '../../atoms/Input';

const Email = (props) => {
  const {
    width,
    height,
    onChange,
    value,
    name,
  } = props;
  return (
    <EmailStyled
      width={ width }
      height={ height }
    >
      <Paragraph>Email</Paragraph>
      <Input
        placeHolder='Digite seu email'
        onChange={ onChange }
        value={ value }
        type='email'
        name={ name }
      />
    </EmailStyled>
  );
}

Email.defaultProps = {
  width: '100%',
  height: 'fit-content',
  name: '',
}

Email.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
}

export default Email;