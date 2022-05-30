import styled from 'styled-components';

const EmailPhoneContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
`;

const UpdateContactFormStyle = styled.div`
	align-items: center;
	background-color: white;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
	display: flex;
	flex-direction: column;
	margin: 50px auto;
	padding: 10px;
	width: 90%;
`;

const styles = {
	UpdateContactFormStyle,
	EmailPhoneContainer,
}

export default styles;
