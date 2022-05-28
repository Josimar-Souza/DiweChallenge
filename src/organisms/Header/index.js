import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from './headerStyle';
import BackButton from '../../molecules/BackButton';

const Header = (props) => {
  const { backPath } = props
  return (
    <HeaderStyle>
      <BackButton width='10%' backPath={ backPath } />
    </HeaderStyle>
  )
}

Header.propTypes = {
  backPath: PropTypes.string.isRequired,
}

export default Header;
