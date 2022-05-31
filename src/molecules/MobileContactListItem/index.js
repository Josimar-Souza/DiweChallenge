import React from 'react';
import PropTypes from 'prop-types';
import styles from './mobileContactListItemStyle';
import Paragraph from '../../atoms/Paragraph';
import phoneIcon from '../../Images/Icons/smartphone.svg';

const MobileContactListItem = ({ contact }) => {
	const {
		MobileContactListItemStyle,
		UserInfoContainer,
		NameEmailContainer,
		MobilePhoneContainer,
		PhoneIcon,
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
		</MobileContactListItemStyle>
	);
}

MobileContactListItem.propTypes = {
	contact: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		mobile: PropTypes.string.isRequired,
	}).isRequired,
};

export default MobileContactListItem;
