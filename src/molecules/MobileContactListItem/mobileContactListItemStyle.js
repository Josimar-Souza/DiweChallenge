import styled from 'styled-components';

const PhoneIcon = styled.img`
	width: 18%;
`;

const MobilePhoneContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
`;

const NameEmailContainer = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	margin-bottom: 25px;
`;

const UserInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
`;

const MobileContactListItemStyle = styled.div`
	border: 1px solid gray;
	border-radius: 6px;
	display: flex;
	justify-content: space-between;
	padding: 10px;
	width: 85%;
`;

const styles = {
	MobileContactListItemStyle,
	UserInfoContainer,
	NameEmailContainer,
	MobilePhoneContainer,
	PhoneIcon,
}

export default styles;
