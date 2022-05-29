import React from 'react';
import PropTypes from 'prop-types'
import styles from './modalStyle';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';

const Modal = ({ display, closeModal, removeContact }) => {
	const { ModalStyle, ScreenFade, ButtonsContainer } = styles;
	
	return (
		<ScreenFade display={ display }>
			<ModalStyle>
				<Paragraph
					textColor='black'
				>
					Tem certeza que deseja excluir este contato?
				</Paragraph>
				<Paragraph
					textColor='gray'
					fontSize='18px'
				>
					Após excluir, não será possivel recuperar o contato.
				</Paragraph>
				<ButtonsContainer>
					<Button
						width='45%'
						backGroundColor='red'
						scaleAnimation='scale(1.1, 1.1)'
						onClick={ removeContact }
					>
						Exluir contato
					</Button>
					<Button
						width='45%'
						backGroundColor='white'
						textColor='black'
						border='1px solid black'
						scaleAnimation='scale(1.1, 1.1)'
						onClick={ closeModal }
					>
						Não excluir
					</Button>
				</ButtonsContainer>
			</ModalStyle>
		</ScreenFade>
	);
}

Modal.propTypes = {
	display: PropTypes.string.isRequired,
	closeModal: PropTypes.func.isRequired,
	removeContact: PropTypes.func.isRequired,
};

export default Modal;
