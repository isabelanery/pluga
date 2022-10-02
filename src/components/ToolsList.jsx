import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import CardWithModal from './CardWithModal';
import './ToolsList.css';

export default function ToolsList() {
  const [list, setList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
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

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="list-container">
      <div className="list-wrapper">
        {
          list.length > 0
            && paginate(list, toolsByPage, pageNumber)
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
