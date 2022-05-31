import styled from 'styled-components';

const EmailPhoneContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	
	@media(max-width: 390px) {
		display: flex;
		flex-direction: column;
		height: 18rem;
		justify-content: space-between;
		margin-top: 2rem;
		width: 100%;
	}
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
	
	@media(max-width: 390px) {
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
		box-shadow: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 1.5rem auto;
		width: 100%;
	}
`;

const styles = {
	UpdateContactFormStyle,
	EmailPhoneContainer,
}

export default styles;
