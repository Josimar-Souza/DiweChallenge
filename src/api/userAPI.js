import axios from 'axios';
import ErrorCreator from '../utils/ErrorCreator';

class UserAPI{
	constructor(baseURL, timeout) {
		this.api = axios.create({
			baseURL,
			timeout,
		});
	}

	async login(userData) {
		try {
			const { data: { token } } = await this.api.post('/auth/login', userData);
			return token;
		} catch(error) {
			console.log(error);
			if (error.response.status === 400) {
				return new ErrorCreator('Email ou Senha incorretos!');
			}

			return new ErrorCreator('Não foi possível logar na sua conta!')
		}
	}
}

export default UserAPI;