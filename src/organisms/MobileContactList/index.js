import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MobileContactListStyle from './mobileContactListStyle';
import MobileContactListItem from '../../molecules/MobileContactListItem';
import Button from '../../atoms/Button';
import Modal from '../../molecules/Modal';

const MobileContactList = ({ contacts }) => {
	const [modalDisplay, setModalDisplay] = useState({ state: 'none', id: 0 });
	const onAddButtonClick = () => {
		navigate('/contacts/add');
	};
	
	const onRemoveButtonClick = (id) => {
		setModalDisplay({ state: 'block', id });
	}
	
	const closeModal = () => {
		setModalDisplay({ state: 'none', id: 0 });
	};
	
	const removeContact = async () => {
		const remainingContacts = contacts.filter(({ id }) => modalDisplay.id !== id);
		const response = await contactsAPI.deleteContact(modalDisplay.id, getToken());
		
		if (response instanceof ErrorCreator) {
			setMessage(response.message);
		} else {
			setMessage('Contato excluido com successo!');
			dispatch(addContacts(remainingContacts));
		}
		
		setTimeout(() => {
			setMessage('');
		}, 3000);
		
		setModalDisplay({ state: 'none', id: 0 });
	}

	return (
		<MobileContactListStyle>
			<Modal
				display={ modalDisplay.state }
				closeModal={ closeModal }
				removeContact={ removeContact }
			/>
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
					(contact) =>
						<MobileContactListItem
							key={ contact.id }
							contact={ contact }
							onRemoveButtonClick={onRemoveButtonClick}
						/>
				)
			}
		</MobileContactListStyle>
	);
};

MobileContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MobileContactList;
