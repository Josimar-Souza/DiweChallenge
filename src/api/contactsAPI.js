import axios from 'axios';
import ErrorCreator from '../utils/ErrorCreator';

class ContactsAPI {
	constructor(baseURL, timeout) {
		this.api = axios.create({
			baseURL,
			timeout,
		});
	}

	async getAllContacts(token) {
		try {
			const { data } = await this.api.get('/contacts', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
	
			return data;
		} catch(error) {
			console.log(error.message);
			return new ErrorCreator('Não foi possível listar os contatos');
		}
	}

	async getContactById(id, token) {
		try {
			const { data } = await this.api.get(`/contacts/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
	
			console.log(data);
		} catch(error) {
			console.log(error.message);
			return new ErrorCreator('Não foi possível listar o contato');
		}
	}

	async createNewContact(contactData, token) {
		try {
			const { data } = await this.api.post('/contacts', contactData, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
	
			return data;
		} catch(error) {
			console.log(error.message);
			return new ErrorCreator('Não foi possível criar um novo contato');
		}
	}

	async editContact(newData, id, token) {
		try {
			const { data } = await this.api.put(`/contacts/${id}`, newData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
	
			return data;
		} catch(error) {
			console.log(error.message);
			return new ErrorCreator('Não foi possível editar o contato');
		}
	}

	async deleteContact(id, token) {
		try {
			const { data } = await this.api.delete(`/contacts/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
	
			return data;
		} catch(error) {
			console.log(error.message);
			return new ErrorCreator('Não foi possível deletar o contato');
		}
	}
}

export default ContactsAPI;