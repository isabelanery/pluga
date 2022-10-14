export const TOOLS_BY_PAGE = 11;

// reference https://stackoverflow.com/questions/42761068/paginate-javascript-array
export const paginate = (array, pageSize, pageNum) => array
  .slice((pageNum - 1) * pageSize, pageNum * pageSize);

export const getLastPageNumber = (array) => Math.ceil(array.length / TOOLS_BY_PAGE);
