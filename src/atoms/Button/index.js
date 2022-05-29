import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './buttonStyle';

const Button = (props) => {
  const {
    onClick,
    children,
    width,
    height,
    backGroundColor,
    textColor,
    type,
    margin,
  } = props;

  return (
    <ButtonStyle
      onClick={ onClick }
      width={ width }
      height={ height }
      backGroundColor={ backGroundColor }
      textColor={ textColor }
      type={ type }
      margin = { margin }
    >
      { children }
    </ButtonStyle>
  );
}

Button.defaultProps = {
  width: '100%',
  height: 'fit-content',
  backGroundColor: '#12295B',
  textColor: 'white',
  type: 'button',
  margin: '10px 0',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  backGroundColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.string,
  margin: PropTypes.string,
}

export default Button;
