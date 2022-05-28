import styled from 'styled-components';

const TitleStyle = styled.h1`
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
`;

export default TitleStyle;