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
      />
    </EmailStyled>
  );
}

Email.defaultProps = {
  width: '100%',
  height: 'fit-content',
}

Email.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Email;