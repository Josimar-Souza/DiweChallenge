import React from 'react';
import PropTypes from 'prop-types';
import styles from './tableRowStyle';

const TableRow = ({ contact, index }) => {
	const { TableRowStyle, RowCellStyle } = styles;
	console.log(contact);
	
	const getIndexNumber = (number) => {
		if (number < 10) return `0${number}`;
		
		return number;
	};
	
	const getPhoneNumber = (number) => {
		let formattedNumber = '';
		
		for (let index = 0; index < number.length; index += 1) {
			if (index == 0) {
				formattedNumber += `(${number[index]}`;
			} else if (index == 1) {
				formattedNumber += `${number[index]}) `;
			}
			
			if (number.length == 11 && index > 1) {
				if (index < 7) {
					formattedNumber += number[index];
				} else if (index == 7) {
					formattedNumber += '-';
				} else {
					formattedNumber += number[index];
				}
			} else if (number.length < 11 && index > 1) {
				formattedNumber += number[index];
			}
		}
		
		return formattedNumber;
	};
	
	return (
		<TableRowStyle index={ index }>
			<RowCellStyle isIndex>{getIndexNumber(index + 1)}</RowCellStyle>
			<RowCellStyle>{contact.name}</RowCellStyle>
			<RowCellStyle>{getPhoneNumber(contact.mobile)}</RowCellStyle>
			<RowCellStyle>{contact.email}</RowCellStyle>
		</TableRowStyle>
	);
};

TableRow.propTypes = {
	contact: PropTypes.shape({
		name: PropTypes.string.isRequired,
		mobile: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}).isRequired,
	index: PropTypes.number.isRequired,
}

export default TableRow;
