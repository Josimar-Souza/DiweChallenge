import React from 'react';
import PropTypes from 'prop-types';
import MobileContactListStyle from './mobileContactListStyle';
import MobileContactListItem from '../../molecules/MobileContactListItem';
import Button from '../../atoms/Button';

const MobileContactList = ({ contacts }) => {
	const onAddButtonClick = () => {
		navigate('/contacts/add');
	};

	return (
		<MobileContactListStyle>
			<Button
				mobileFontSize='1.3rem'
				width='100%'
				height='4rem'
				onClick={ onAddButtonClick }
			>
				Cadastrar contato
			</Button>
			{
				contacts.map(
					(contact) => <MobileContactListItem key={ contact.id } contact={ contact } />,
				)
			}
		</MobileContactListStyle>
	);
};

MobileContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MobileContactList;
