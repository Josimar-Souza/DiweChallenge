import styled from 'styled-components';

const MobileHeaderIcon = styled.img`
	width: 12%;
`;

const MobileHeaderTitleContainer = styled.div`
	display flex;
	justify-content: flex-start;
	width: 90%;
`;

const MobileHeaderStyle = styled.div`
	align-items: center;
	border-bottom: 1px solid gray;
	display: flex;
	justify-content: space-between;
	padding: 15px;
	width: 100%;
`;

const styles = {
	MobileHeaderStyle,
	MobileHeaderIcon,
	MobileHeaderTitleContainer,
}

export default styles;
