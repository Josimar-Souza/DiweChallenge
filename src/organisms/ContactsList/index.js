import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ContactsListStyle';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import TableHeader from '../../atoms/TableHeader';
import ArrowDown from '../../Images/Icons/chevron-down.svg';
import TableRow from '../../molecules/TableRow';
import Modal from '../../molecules/Modal';
import { addContacts } from '../../redux/reducers/contactsReducer';
import ContactsAPI from '../../api/contactsAPI';
import ErrorCreator from '../../utils/ErrorCreator';

const baseURL = process.env.REACT_APP_BASE_URL;

const ContactsList = ({ contacts }) => {
	const navigate = useNavigate();
	const [modalDisplay, setModalDisplay] = useState({ state: 'none', id: 0 });
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();
	const contactsAPI = new ContactsAPI(baseURL, 10000);
	
	const {
		ContactsListStyle,
		InfoContainer,
		ContactsTable,
		TableHeaderRow,
		ArrowIcon,
	} = styles;
	
	const onAddButtonClick = () => {
		navigate('/add-contact');
	};
	
	const onRemoveButtonClick = (id) => {
		setModalDisplay({ state: 'block', id });
	}
	
	const closeModal = () => {
		setModalDisplay({ state: 'none', id: 0 });
	};
	
	const getToken = () => {
		return localStorage.getItem('token');
	}
	
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
		<ContactsListStyle>
			<Modal
				display={ modalDisplay.state }
				closeModal={ closeModal }
				removeContact={ removeContact }
			/>
			<InfoContainer>
				<Paragraph
					fontWeight='700'
				>
					Listagem de contatos
				</Paragraph>
				<Button
					width='30%'
					backGroundColor='#4263EB'
					onClick={ onAddButtonClick }
				>
					Adicionar novo contato
				</Button>
			</InfoContainer>
			<Paragraph>{ message }</Paragraph>
			<ContactsTable>
				<thead>
					<TableHeaderRow>
						<TableHeader>#<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
						<TableHeader>Nome<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
						<TableHeader>Celular<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
						<TableHeader>Email<ArrowIcon src={ ArrowDown } alt="Icone seta pra baixo na tabela" /></TableHeader>
						<TableHeader>Ações</TableHeader>
					</TableHeaderRow>
				</thead>
				<tbody>
					{
						contacts.map(
							(contact, index) =>
								<TableRow
									key={ contact.id }
									index={ index }
									contact={ contact }
									onRemoveButtonClick={ onRemoveButtonClick }
								/>,
						)
					}
				</tbody>
			</ContactsTable>
		</ContactsListStyle>
	);
};

ContactsList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ContactsList;
