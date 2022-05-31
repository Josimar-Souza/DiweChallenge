import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './mobileContactListItemStyle';
import Paragraph from '../../atoms/Paragraph';
import phoneIcon from '../../Images/Icons/smartphone.svg';
import Button from '../../atoms/Button';
import trashIcon from '../../Images/Icons/trash-mobile.svg';

const MobileContactListItem = ({ contact, onRemoveButtonClick }) => {
	const navigate = useNavigate();
	const {
		MobileContactListItemStyle,
		UserInfoContainer,
		NameEmailContainer,
		MobilePhoneContainer,
		PhoneIcon,
		ButtonsContainer,
	} = styles;

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
					formattedNumber += `-${number[index]}`;
				} else {
					formattedNumber += number[index];
				}
			} else if (number.length < 11 && index > 1) {
				formattedNumber += number[index];
			}
		}

		return formattedNumber;
	};
	
	const onEditButtonClick = () => {
		navigate(`/contacts/edit/${contact.id}`)
	}

	return (
		<MobileContactListItemStyle>
			<UserInfoContainer>
				<NameEmailContainer>
					<Paragraph
						textColor='balck'
						mobileFontSize='2rem'>
							{ contact.name }
						</Paragraph>
					<Paragraph
						mobileFontSize='1.2rem'>
							{ contact.email }
						</Paragraph>
				</NameEmailContainer>
				<MobilePhoneContainer>
					<PhoneIcon src={ phoneIcon } />
					<Paragraph
						mobileFontSize='1.2rem'>
							{ getPhoneNumber(contact.mobile) }
					</Paragraph>
				</MobilePhoneContainer>
			</UserInfoContainer>
			<ButtonsContainer>
				<Button
					backGroundColor='rgba(0, 0, 0, 0)'
					textColor='gray'
					mobileFontSize='1.2rem'
					mobileMargin='0'
					onClick={ onEditButtonClick }
				>
					Editar
				</Button>
				<Button
					backGroundColor='rgba(0, 0, 0, 0)'
					mobileMargin='0'
					onClick={ () => onRemoveButtonClick(contact.id) }
				>
					<img src={ trashIcon } />
				</Button>
			</ButtonsContainer>
		</MobileContactListItemStyle>
	);
}

MobileContactListItem.propTypes = {
	contact: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		mobile: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	}).isRequired,
	onRemoveButtonClick: PropTypes.func.isRequired,
};

export default MobileContactListItem;
