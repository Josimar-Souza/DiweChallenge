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
    border,
    transition,
    scaleAnimation,
  } = props;

  return (
    <ButtonStyle
      onClick={ onClick }
      width={ width }
      height={ height }
      backGroundColor={ backGroundColor }
      textColor={ textColor }
      type={ type }
      margin={ margin }
      border={ border }
      transition={ transition }
      scaleAnimation={ scaleAnimation }
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
  border: 'none',
  transition: '0.2s',
  scaleAnimation: 'scale(1.2, 1.2)'
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
  border: PropTypes.string,
  transition: PropTypes.string,
  scaleAnimation: PropTypes.string,
}

export default Button;
