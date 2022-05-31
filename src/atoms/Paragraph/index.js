import React from 'react';
import PropTypes from 'prop-types';
import ParagraphStyle from './paragraphStyle';

const Paragraph = (props) => {
  const {
    children,
    textColor,
    fontSize,
    fontWeight,
    mobileTextAlign,
    mobileFontSize,
  } = props;
  return (
    <ParagraphStyle
      textColor={ textColor }
      fontSize={ fontSize }
      fontWeight={ fontWeight }
      mobileTextAlign={ mobileTextAlign }
      mobileFontSize={ mobileFontSize }
    >
      { children }
    </ParagraphStyle>
  )
}

Paragraph.defaultProps = {
  textColor: '#12295B',
  fontSize: '1.5rem',
  fontWeight: '600',
  mobileTextAlign: 'center',
  mobileFontSize: '1.5rem'
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  mobileTextAlign: PropTypes.string,
  mobileFontSize: PropTypes.string,
}

export default Paragraph;
