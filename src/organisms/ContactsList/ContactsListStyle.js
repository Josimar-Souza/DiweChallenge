import styled from 'styled-components';

const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const ArrowIcon = styled.img`
	filter: invert(25%) sepia(6%) saturate(6654%) hue-rotate(179deg) brightness(92%) contrast(90%);
	width: 0.8rem;
`;

const ContactsTable = styled.table`
	border-collapse: collapse;
	font-family: 'Montserrat', sans-serif;
	margin: 20px 0;
	width: 90%;
`;

const TableHeaderRow = styled.tr`
	border-bottom: 1.5px solid #ADB5BD;
`;

const ContactsListStyle = styled.div`
	align-items: center;
	border-radius: 5px;
	background-color: white;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	margin: 50px 0;
	padding: 20px;
	width: 90%;
`;

const styles = {
	ContactsListStyle,
	InfoContainer,
	ContactsTable,
	TableHeaderRow,
	ArrowIcon,
};

export default styles;
