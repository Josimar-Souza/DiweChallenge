import styled from 'styled-components';

const ButtonsContainer = styled.div`
	display: flex;
	height: 50px;
	justify-content: space-around;
	width: 100%;
`;

const ScreenFade = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	display: ${({ display }) => display};
	height: 100vh;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
`;

const ModalStyle = styled.div`
	align-items: center;
	background-color: white;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	left: 50%;
	padding: 10px;
	position: fixed;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
`;

const styles = {
	ModalStyle,
	ScreenFade,
	ButtonsContainer,
}

export default styles;
