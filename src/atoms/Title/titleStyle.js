import styled from 'styled-components';

const TitleStyle = styled.h1`
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`;

export default TitleStyle;