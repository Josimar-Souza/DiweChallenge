import styled from 'styled-components';

const InputLabelStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height};
  margin: 10px 0;
  width: ${({ width }) => width};
  
  @media(max-width: 390px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export default InputLabelStyle;
