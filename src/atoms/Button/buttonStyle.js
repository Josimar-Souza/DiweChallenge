import styled from 'styled-components';

const ButtonStyle = styled.button`
  align-items: center;
  border-radius: 5px;
  border: ${({ border }) => border};
  background-color: ${( { backGroundColor }) => backGroundColor};
  color: ${({ textColor }) => textColor};
  display flex;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  height: ${({ height }) => height};
  justify-content: space-around;
  margin ${({ margin }) => margin};
  padding: 10px;
  transition: ${({ transition }) => transition};
  width: ${({ width }) => width};

  :hover {
    cursor: pointer;
    transform: ${({ scaleAnimation }) => scaleAnimation};
  }
  
  @media(max-width: 390px) {
    font-size: 2.5rem;
    margin: 50px auto;
    width: 80%;
    
    :hover {
      cursor: pointer;
      transform: scale(1, 1);
    }
  }
`;

export default ButtonStyle;
