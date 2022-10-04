import React, { useEffect, useState } from 'react';
import CardWithModal from '../ToolCardWithModal';
import Loading from '../Loading';
import api from '../../services/api';
import './ListAllTools.css';

const TOOLS_BY_PAGE = 11;

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

  // reference https://stackoverflow.com/questions/42761068/paginate-javascript-array
  const paginate = (array, pageSize, pageNum) => array
    .slice((pageNum - 1) * pageSize, pageNum * pageSize);

  const getLastPageNumber = (array) => Math.round(array.length / TOOLS_BY_PAGE);

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

  const handleChange = ({ target }) => {
    const { value } = target;
    getSearchResults(value.toLowerCase());
  };

  useEffect(() => {
    getToolsList();
  }, []);

  useEffect(() => {
    const shouldChangePage = paginate(toolListWithSearch, TOOLS_BY_PAGE, pageNumber).length < 11;
    setIsBtnDisabled(shouldChangePage);
  }, [search]);

  return (
    <div className="list-container">
      <input
        type="text"
        className="search"
        value={search}
        onChange={handleChange}
        placeholder="Procurar por nome"
      />

      <div className="list-wrapper">
        {
        originalToolsList.length > 0
          ? paginate(toolListWithSearch, TOOLS_BY_PAGE, pageNumber)
            .map((tool) => (
              <CardWithModal data={tool} key={`tool-card-${tool.app_id}`} />
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
