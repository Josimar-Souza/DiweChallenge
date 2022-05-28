import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackButtonStyle from './BackButtonStyle';
import Button from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';
import arrowLeft from '../../Images/Icons/arrow-left.svg';

const BackButton = (props) => {
  const { width, backPath } = props;
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(backPath);
  };

  return (
    <BackButtonStyle width={ width }>
      <Button
        backGroundColor='rgba(0, 0, 0, 0)'
        textColor='black'
        onClick={ onButtonClick }
      >
        <img src={ arrowLeft } />
        <Paragraph
          textColor='black'
          fontSize='20px'
        >
          Voltar
        </Paragraph>
      </Button>
    </BackButtonStyle>
  );
};

BackButton.defaultProps = {
  width: '50%',
};

BackButton.propTypes = {
  width: PropTypes.string,
  backPath: PropTypes.string.isRequired,
};

export default BackButton;
