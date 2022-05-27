import axios from 'axios';

class ContactsAPI {
    constructor(baseURL, timeout) {
        this.api = axios.create({
            baseURL,
            timeout,
        });
    }

    async getAllContacts(token) {
        const { data } = await this.api.get('/contacts', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    }

    async getContactById(id, token) {
        const { data } = await this.api.get(`/contacts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(data);
    }

    async createNewContact(contactData, token) {
        const { data } = await this.api.post('/contacts', contactData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return data;
    }
}

export default ContactsAPI;