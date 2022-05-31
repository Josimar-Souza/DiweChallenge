import styled from 'styled-components';

const EmailPhoneSection = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	
	@media(max-width: 390px) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
	}
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
	
	@media(max-width: 390px) {
		background-color: rgba(0, 0, 0, 0);
		box-shadow: none;
		width: 100%;
	}
`;

const styles = {
	AddContactFormStyle,
	EmailPhoneSection,
};

export default styles;
