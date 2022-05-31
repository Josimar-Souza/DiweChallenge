import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import styles from './ContactsTemplateStyle';
import Header from '../../organisms/Header';
import MobileHeader from '../../organisms/MobileHeader';
import ContactsList from '../../organisms/ContactsList';
import MobileContactList from '../../organisms/MobileContactList';
import ContactsAPI from '../../api/contactsAPI';
import { addContacts } from '../../redux/reducers/contactsReducer';
import getLocalStorageItems from '../../utils/getLocalStorageItems';

const baseURL = process.env.REACT_APP_BASE_URL;

const ContactsTemplate = () => {
	const { ContactsListContainer, ContactsTemplateStyle } = styles;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const contacts = useSelector(({ contactsReducer }) => contactsReducer.contacts);

	useEffect(() => {
		const getContactList = async () => {
			const contactsAPI = new ContactsAPI(baseURL, 10000);
			const token = getLocalStorageItems('token');
			
			if (!token) {
				navigate('/login');
				return;
			}

			const contacts = await contactsAPI.getAllContacts(token);
			dispatch(addContacts(contacts));
		};
		
		getContactList();
	}, []);

	const getContactList = () => {
		if (!isMobile) {
			return (
				<ContactsList contacts={ contacts } />
			);
		}
		
		return <MobileContactList contacts={ contacts } />;
	};

	const getHeader = () => {
		if (!isMobile) {
			return (
				<Header backPath='/login' />
			);
		}

		return (
			<MobileHeader
				title='Listagem de usuários'
				mobileFontSize='1.5rem'
				titleMargin='0 0 0 1.8rem'
				backPath='/'
			/>
		);
	};

	return (
		<ContactsTemplateStyle>
			{ getHeader() }
			<ContactsListContainer>
				{ getContactList() }
			</ContactsListContainer>
		</ContactsTemplateStyle>
	)
}

export default ContactsTemplate;
