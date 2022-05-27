import axios from 'axios';

class ContactsAPI {
    constructor(baseURL, timeout) {
        this.api = axios.create({
            baseURL,
            timeout,
        });
    }

    async getAllContacs(token) {
        const response = await this.api.get('/contacts', {
            headers: {
                authorization: token,
            },
        });

        console.log(response);
    }
}

export default ContactsAPI;