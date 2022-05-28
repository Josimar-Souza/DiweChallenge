import React from 'react';
import PropTypes from 'prop-types';
import PasswordStyled from './passwordStyle';
import Paragraph from '../../atoms/Paragraph';
import Input from '../../atoms/Input';

const Password = (props) => {
  const {
    width,
    height,
    onChange,
    value,
    name,
  } = props;
  return (
    <PasswordStyled
      width={ width }
      height={ height }
    >
      <Paragraph>Senha</Paragraph>
      <Input
        placeHolder='Digite sua senha'
        onChange={ onChange }
        value={ value }
        type="password"
        name={ name }
      />
    </PasswordStyled>
  );
}

Password.defaultProps = {
  width: '100%',
  height: 'fit-content',
  name: '',
}

Password.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
}

export default Password;