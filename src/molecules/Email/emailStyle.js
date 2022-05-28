import styled from 'styled-components';

const EmailStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height};
  margin: 10px 0;
  width: ${({ width }) => width};
`;

export default EmailStyled;
