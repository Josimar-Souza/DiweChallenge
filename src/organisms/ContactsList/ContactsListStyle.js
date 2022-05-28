import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ContactsListStyle = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  height: 200px;
  margin: 50px 0;
  padding: 20px;
  width: 80%;
`;

const styles = {
  ContactsListStyle,
  InfoContainer
};

export default styles;
