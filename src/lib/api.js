import axios from 'axios';
import { PARAMS_MAPPING } from '../locales/en';

function mapStateToRequestBody(state) {
    let request = {};
    
    Object.keys(state).forEach(f => {
        request[f] = [];
        if(state[f].length === 0) {
            if(f === "category") {
                request[f] = [];
            } else {
                request[f].push(PARAMS_MAPPING[f]["any"]);
            }
        } else {
            state[f].forEach(v => {
                request[f].push(PARAMS_MAPPING[f][v]);
            });
        }
    });

    return request;
}

export function getAllResources() {
    return axios.get(`${process.env.REACT_APP_API_URL}/data/new`);
}

export function getFilteredResources(state) {
    return axios.post(`${process.env.REACT_APP_API_URL}/data/update`, mapStateToRequestBody(state));
}
