import axios from 'axios';

export function getAllResources() {
    return axios.get(`${process.env.REACT_APP_API_URL}/data/new`);
}
