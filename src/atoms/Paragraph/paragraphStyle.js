import styled from 'styled-components';

const ParagraphStyle = styled.p`
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
`;

export default ParagraphStyle;