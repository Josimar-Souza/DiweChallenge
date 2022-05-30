import styled from 'styled-components';

const LoadingMessageStyle = styled.div`
	background-color: white;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	left: 50%;
	position: fixed;
	padding: 10px;
	transform: translate(-50%, -50%);
	top: 50%;
	width: 40%;
`;

export default LoadingMessageStyle;
