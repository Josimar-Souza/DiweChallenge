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
    mobileFontSize,
    mobileMargin,
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
      mobileFontSize={ mobileFontSize }
      mobileMargin={ mobileMargin }
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
  scaleAnimation: 'scale(1.2, 1.2)',
  mobileFontSize: '2.5rem',
  mobileMargin: '50px auto'
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
  mobileFontSize: PropTypes.string,
  mobileMargin: PropTypes.string,
}

export default Button;
