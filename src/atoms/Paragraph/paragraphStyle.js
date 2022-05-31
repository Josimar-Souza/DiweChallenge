import styled from 'styled-components';

const ParagraphStyle = styled.p`
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0;
  
  @media(max-width: 390px) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
    text-align: ${({ mobileTextAlign }) => mobileTextAlign};
  }
`;

export default ParagraphStyle;