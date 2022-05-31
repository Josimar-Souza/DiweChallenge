import React from 'react';
import PropTypes from 'prop-types';
import TitleStyle from './titleStyle';

const Title = (props) => {
  const {
    children,
    textColor,
    fontSize,
    margin,
  } = props;
  return (
    <TitleStyle
      textColor={ textColor }
      fontSize={ fontSize }
      margin={ margin }
    >
      { children }
    </TitleStyle>
  )
}

Title.defaultProps = {
  textColor: '#12295B',
  fontSize: '2.2rem',
  margin: '0',
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
}

export default Title;
