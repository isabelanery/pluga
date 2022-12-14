import axios from 'axios';

const BASE_URL = 'https://pluga.co';
const GET_TOOLS_PATH = '/ferramentas_search.json';

const fetchData = async (path) => {
  const response = await axios.get(`${BASE_URL}${path}`);
  return response || null;
};

const getTools = async () => {
  const { data } = await fetchData(GET_TOOLS_PATH);
  return data || [];
};

const api = {
  fetchData,
  getTools,
};

export default api;
