import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import styles from './ContactsTemplateStyle';
import Header from '../../organisms/Header';
import ContactsList from '../../organisms/ContactsList';
import ContactsAPI from '../../api/contactsAPI';
import { addContacts } from '../../redux/reducers/contactsReducer';

const baseURL = process.env.REACT_APP_BASE_URL;

const ContactsTemplate = () => {
	const { ContactsListContainer, ContactsTemplateStyle } = styles;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const contacts = useSelector(({ contactsReducer }) => contactsReducer.contacts);
	
	useEffect(() => {
		const getContactList = async () => {
			const contactsAPI = new ContactsAPI(baseURL, 10000);
			const token = localStorage.getItem('token');
			
			if (!token) {
				navigate('/login');
				return;
			}
			
			const contacts = await contactsAPI.getAllContacts(token);
			dispatch(addContacts(contacts));
		};
		
		getContactList();
	}, []);
	
	return (
		<ContactsTemplateStyle>
			<Header backPath='/login' />
			<ContactsListContainer>
				<ContactsList contacts={ contacts } />
			</ContactsListContainer>
		</ContactsTemplateStyle>
	)
}

export default ContactsTemplate;
