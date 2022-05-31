import styled from 'styled-components';

const TitleStyle = styled.h1`
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  margin: ${({ margin }) => margin};

  @media(max-width: 390px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
  }
`;

export default TitleStyle;
