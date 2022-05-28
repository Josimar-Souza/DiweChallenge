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
`;

export default InputStyle;
