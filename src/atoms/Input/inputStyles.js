import styled from 'styled-components';

const InputStyle = styled.input`
  border: none;
  border-radius: 5px;
  background: #F1F3F5;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  height: ${({ height }) => height};
  padding: 10px;
  width: ${({ width }) => width};
  
  @media(max-width: 390px) {
    font-size: 1.5rem;
    height: 60px;
    padding: 5px;
    max-width: 96%;
  }
`;

export default InputStyle;
