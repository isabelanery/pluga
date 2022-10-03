import React, { useEffect, useState } from 'react';
import CardWithModal from '../toolCardWithModal';
import api from '../services/api';
import './ToolsList.css';

export default function ToolsList() {
  const [list, setList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const toolsByPage = 11;

  const getList = async () => {
    const { data } = await api();
    setList(data);
  };

  // reference https://stackoverflow.com/questions/42761068/paginate-javascript-array
  const paginate = (array, pageSize, pageNum) => array
    .slice((pageNum - 1) * pageSize, pageNum * pageSize);

  const nextPage = () => {
    const loopPages = pageNumber === (list.length / toolsByPage) ? 1 : pageNumber + 1;
    setPageNumber(loopPages);
  };

  const previousPage = () => {
    const loopPages = pageNumber === 1 ? (list.length / toolsByPage) : pageNumber - 1;
    setPageNumber(loopPages);
  };

  const handleChange = ({ target }) => {
    const { value } = target;

    setSearch(value.toLowerCase());
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    // change 4 loading conditional render
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
          list.length > 0
            && paginate(list, toolsByPage, pageNumber)
              .filter((item) => item.name.toLowerCase().includes(search))
              .map((tool) => (
                <CardWithModal data={tool} key={`tool-card-${tool.app_id}`} />
              ))
        }
      </div>

      <button
        type="button"
        className="btn"
        onClick={previousPage}
      >
        { '<' }
      </button>

      <button
        type="button"
        className="btn"
        onClick={nextPage}
      >
        { '>' }
      </button>
    </div>
  );
}
