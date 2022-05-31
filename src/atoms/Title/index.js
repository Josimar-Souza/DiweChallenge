import React from 'react';
import PropTypes from 'prop-types';
import TitleStyle from './titleStyle';

const Title = (props) => {
  const {
    children,
    textColor,
    fontSize,
    margin,
    mobileFontSize,
  } = props;
  return (
    <TitleStyle
      textColor={ textColor }
      fontSize={ fontSize }
      margin={ margin }
      mobileFontSize={ mobileFontSize }
    >
      { children }
    </TitleStyle>
  )
}

Title.defaultProps = {
  textColor: '#12295B',
  fontSize: '2.2rem',
  margin: '0',
  mobileFontSize: '3rem',
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  mobileFontSize: PropTypes.string,
}

export default Title;
