const LAST_OPENED_TOOLS = 'lastOpenedTools';

const getFromLocalStorage = (key) => {
  const response = localStorage.getItem(key);
  return JSON.parse(response) || null;
};

const getLastOpenedTools = () => {
  const response = getFromLocalStorage(LAST_OPENED_TOOLS);
  return response || [];
};

const setLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const addToLastOpenedTools = (data) => setLocalStorage(LAST_OPENED_TOOLS, data);

const updateLastOpenedTools = (data) => {
  const lastOpenedList = getLastOpenedTools();

  const duplicated = lastOpenedList.find((item) => item.name === data.name);

  if (duplicated) lastOpenedList.splice(lastOpenedList.indexOf(duplicated), 1);

  lastOpenedList.unshift(data);

  if (lastOpenedList.length > 3) lastOpenedList.pop();

  return addToLastOpenedTools(lastOpenedList);
};

const storage = {
  getFromLocalStorage,
  setLocalStorage,
  getLastOpenedTools,
  addToLastOpenedTools,
  updateLastOpenedTools,
};

export default storage;
