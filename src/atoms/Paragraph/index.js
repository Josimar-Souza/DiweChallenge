import React from 'react';
import PropTypes from 'prop-types';
import ParagraphStyle from './paragraphStyle';

const Paragraph = (props) => {
  const {
    children,
    textColor,
    fontSize,
  } = props;
  return (
    <ParagraphStyle
      textColor={ textColor }
      fontSize={ fontSize }
    >
      { children }
    </ParagraphStyle>
  )
}

Paragraph.defaultProps = {
  textColor: '#12295B',
  fontSize: '1.5rem',
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
}

export default Paragraph;
