import axios from 'axios';

const baseURL = 'https://pluga.co/ferramentas_search.json';

export const api = () => axios.get(baseURL);