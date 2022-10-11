import React, { useContext, useEffect, useState } from 'react';
import ToolCardWithModal from '../ToolCardWithModal';
import Loading from '../Loading';
import api from '../../services/api';
import { paginate, TOOLS_BY_PAGE } from '../../services/pagination';
import { AppContext } from '../../context/Provider';
import PaginateList from '../PaginateList';
import './ListAllTools.css';

export default function ListAllTools() {
  const [originalToolsList, setOriginalToolsList] = useState([]);
  const [toolListWithSearch, setSearchToolsList] = useState([]);
  const [search, setSearch] = useState('');
  const { pageNumber, setPageNumber } = useContext(AppContext);

  const getToolsList = async () => {
    const { data } = await api.getTools();
    setOriginalToolsList(data);
    setSearchToolsList(data);
  };

  const getSearchResults = (value) => {
    const normalizedValue = value.toLowerCase();
    const toolsFound = originalToolsList
      .filter((item) => item.name.toLowerCase().includes(normalizedValue));

    setSearch(normalizedValue);
    setSearchToolsList(toolsFound);
    setPageNumber(1);
  };

  useEffect(() => {
    getToolsList();
  }, []);

  return (
    <div className="list-container">
      <input
        type="text"
        className="search"
        value={search}
        onChange={(event) => getSearchResults(event.target.value)}
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

        {
          toolListWithSearch.length <= 0
            && <p className="not-found"> Not Found </p>
        }
      </div>

      <PaginateList toolList={toolListWithSearch} />
    </div>
  );
}
