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
  }

  // reference https://stackoverflow.com/questions/42761068/paginate-javascript-array
  const paginate = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  const nextPage = () => {
    const loopPages = pageNumber === (list.length / toolsByPage) ? 1 : pageNumber + 1;
    setPageNumber(loopPages);
  };

  const previousPage = () => {
    const loopPages = pageNumber === 1 ? (list.length / toolsByPage) : pageNumber - 1;
    setPageNumber(loopPages);
  };


  useEffect(() =>{
    getList();
  }, []);

  return (
    <div className="list-container">
      <div className="list-wrapper">
        {
          list.length > 0
            && paginate(list, toolsByPage, pageNumber)
              .map((tool, i) => (
                <CardWithModal data={ tool } key={ `tool-card-${i}` } />
              ))
        }
      </div>

      <button
        type="button"
        className="btn"
        onClick={ previousPage }
      >
        { '<' }
      </button>

      <button
        type="button"
        className="btn"
        onClick={ nextPage }
      >
        { '>' }
      </button>
    </div>
  );
}
