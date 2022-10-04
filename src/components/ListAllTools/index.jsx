import React, { useEffect, useState } from 'react';
import ToolCardWithModal from '../ToolCardWithModal';
import Loading from '../Loading';
import api from '../../services/api';
import './ListAllTools.css';

const TOOLS_BY_PAGE = 11;

// reference https://stackoverflow.com/questions/42761068/paginate-javascript-array
const paginate = (array, pageSize, pageNum) => array
  .slice((pageNum - 1) * pageSize, pageNum * pageSize);

const getLastPageNumber = (array) => Math.ceil(array.length / TOOLS_BY_PAGE);

export default function ListAllTools() {
  const [originalToolsList, setOriginalToolsList] = useState([]);
  const [toolListWithSearch, setSearchToolsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const getToolsList = async () => {
    const { data } = await api.getTools();
    setOriginalToolsList(data);
    setSearchToolsList(data);
  };

  const nextPage = () => {
    const lastPage = getLastPageNumber(toolListWithSearch);
    const loopPages = pageNumber === lastPage ? 1 : pageNumber + 1;
    setPageNumber(loopPages);
  };

  const previousPage = () => {
    const lastPage = getLastPageNumber(toolListWithSearch);
    const loopPages = pageNumber === 1 ? lastPage : pageNumber - 1;
    setPageNumber(loopPages);
  };

  const getSearchResults = (value) => {
    const toolsFound = originalToolsList
      .filter((item) => item.name.toLowerCase().includes(value));

    setSearch(value);
    setSearchToolsList(toolsFound);
    setPageNumber(1);
  };

  const handleSearchChange = ({ target }) => {
    const { value } = target;
    getSearchResults(value.toLowerCase());
  };

  useEffect(() => {
    getToolsList();
  }, []);

  useEffect(() => {
    const shouldChangePages = getLastPageNumber(toolListWithSearch) === 1;
    setIsBtnDisabled(shouldChangePages);
  }, [search]);

  return (
    <div className="list-container">
      <input
        type="text"
        className="search"
        value={search}
        onChange={handleSearchChange}
        placeholder="Procurar por nome"
      />

      <div className="list-wrapper">
        {
        originalToolsList.length > 0
          ? paginate(toolListWithSearch, TOOLS_BY_PAGE, pageNumber)
            .map((tool) => (
              <ToolCardWithModal data={tool} key={`tool-card-${tool.app_id}`} />
            ))
          : <Loading />
        }
      </div>

      <button
        type="button"
        className="btn"
        onClick={previousPage}
        disabled={isBtnDisabled}
      >
        { '<' }
      </button>

      <button
        type="button"
        className="btn"
        onClick={nextPage}
        disabled={isBtnDisabled}
      >
        { '>' }
      </button>
    </div>
  );
}
