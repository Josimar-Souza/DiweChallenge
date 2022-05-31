import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import MobileContactListStyle from './mobileContactListStyle';
import MobileContactListItem from '../../molecules/MobileContactListItem';
import Button from '../../atoms/Button';
import Modal from '../../molecules/Modal';
import ContactsAPI from '../../api/contactsAPI';
import getLocalStorageItems from '../../utils/getLocalStorageItems';
import ErrorCreator from '../../utils/ErrorCreator';
import Paragraph from '../../atoms/Paragraph';
import { addContacts } from '../../redux/reducers/contactsReducer';

const baseURL = process.env.REACT_APP_BASE_URL;

const MobileContactList = ({ contacts }) => {
	const [modalDisplay, setModalDisplay] = useState({ state: 'none', id: 0 });
	const [message, setMessage] = useState('');
	const contactsAPI = new ContactsAPI(baseURL, 10000);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
		const token = getLocalStorageItems('token');
		const remainingContacts = contacts.filter(({ id }) => modalDisplay.id !== id);
		const response = await contactsAPI.deleteContact(modalDisplay.id, token);
		
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
			<Paragraph>{ message }</Paragraph>
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
