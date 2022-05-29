import React from 'react';
import PropTypes from 'prop-types';
import TableHeaderStyle from './tableHeaderStyle';

const TableHeader = (props) => {
	const { children } = props;
	return (
		<TableHeaderStyle>
			{ children }
		</TableHeaderStyle>
	);
};

TableHeader.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TableHeader;
