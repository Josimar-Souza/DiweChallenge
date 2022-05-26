import axios from 'axios';

class UserAPI{
    constructor(baseURL, timeout) {
        this.api = axios.create({
            baseURL,
            timeout,
        });
    }

    async login(userData) {
        const { data: { token } } = await this.api.post('/auth/login', userData);
        return token;
    }
}

export default UserAPI;