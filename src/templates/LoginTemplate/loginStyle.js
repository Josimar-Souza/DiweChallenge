import styled from 'styled-components';

const LogoSection = styled.div`
  border: 1px solid red;
  width: 40%;
`;

const InstructionsSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const FormSection = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const LoginStyle = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  width: 100%;
`;

const styles = {
  LoginStyle,
  FormSection,
  LogoSection,
  InstructionsSection,
};

export default styles;
