import styled from 'styled-components';

const EmailPhoneSection = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
`;

const AddContactFormStyle = styled.div`
	align-items: center;
	background-color: white;
	border-radius: 5px;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	margin: 5rem auto;
	padding: 10px;
	width: 80%;
`;

const styles = {
	AddContactFormStyle,
	EmailPhoneSection,
};

export default styles;
