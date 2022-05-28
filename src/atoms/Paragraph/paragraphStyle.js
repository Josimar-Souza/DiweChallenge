import styled from 'styled-components';

const ParagraphStyle = styled.p`
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0;
`;

export default ParagraphStyle;