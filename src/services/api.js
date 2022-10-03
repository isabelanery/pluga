import axios from 'axios';

const baseURL = 'https://pluga.co/ferramentas_search.json';

export default () => axios.get(baseURL);
