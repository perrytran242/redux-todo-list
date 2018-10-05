import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c718_perrytran';

// doesn't need async await with middleware redux promise
export function getListData() {
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_LIST_DATA,
        payload: response,
    }
}

export function addListItem(item) {
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_LIST_ITEM,
        payload: response,
    }
}

export function getSingleItem(id) {
    const response = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);
    return {
        type: types.GET_SINGLE_ITEM,
        payload: response,
    }
}