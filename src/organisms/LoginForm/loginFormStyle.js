import styled from 'styled-components';

const ErrorContainer = styled.div`
  text-align: center;
`;

const LoginFormStyle = styled.div`
  width: 100%;
  
  @media(max-width: 390px) {
    border-sizing: border-box;
    margin: 0;
    width: 90%;
  }
`;

const styles = {
  LoginFormStyle,
  ErrorContainer,
}

export default styles;
