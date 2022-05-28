import styled from 'styled-components';

const ButtonStyle = styled.button`
  align-items: center;
  border-radius: 5px;
  border: none;
  background-color: ${( { backGroundColor }) => backGroundColor};
  color: ${({ textColor }) => textColor};
  display flex;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  height: ${({ height }) => height};
  justify-content: space-around;
  margin 10px 0;
  padding: 10px;
  transition: 0.2s;
  width: ${({ width }) => width};

  :hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
  }
`;

export default ButtonStyle;
