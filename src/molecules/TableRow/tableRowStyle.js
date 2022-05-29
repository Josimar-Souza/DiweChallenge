import styled from 'styled-components';

const getBackgroundColor = ({ index }) => {
	if ((index % 2) == 0) return '#F1F3F5';
	
	return 'white';
};

const getCellColor = ({ isIndex }) => {
	if (isIndex) return '#244677';
	
	return 'black';
}

const ActionsSection = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const RowCellStyle = styled.td`
	color: ${ getCellColor };
	font-weight: 700;
	padding: 10px;
`;

const TableRowStyle = styled.tr`
	background-color: ${ getBackgroundColor };
`;

const styles = {
	TableRowStyle,
	RowCellStyle,
	ActionsSection,
};

export default styles;
