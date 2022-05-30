import styled from 'styled-components';

const LogoImage = styled.img`
	width: 100%;
`;

const LogoSection = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	width: 40%;
`;

const InstructionsSection = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
	
	@media(max-width: 390px) {
		align-items: center;
		display: flex;
		flex-direction: column;
		margin: 0;
		width: 100%;
	}
`;

const FormSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	
	@media(max-width: 390px) {
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-around;
		width: 100%;
	}
`;

const LoginStyle = styled.section`
	display: flex;
	height: 100vh;
	justify-content: space-around;
	width: 100%;
	
	@media(max-width: 390px) {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
	}
`;

const styles = {
	LoginStyle,
	FormSection,
	LogoSection,
	InstructionsSection,
	LogoImage,
};

export default styles;
