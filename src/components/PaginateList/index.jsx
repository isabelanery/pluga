import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../context/Provider';
import { getLastPageNumber } from '../../services/pagination';
import './PaginateList.css';

export default function PaginateList({ toolList }) {
  const { pageNumber, setPageNumber } = useContext(AppContext);
  const [lastPageNumber, setLastPageNumber] = useState();

  const nextPage = () => {
    const loopPages = pageNumber === lastPageNumber ? 1 : pageNumber + 1;
    setPageNumber(loopPages);
  };

  const previousPage = () => {
    const loopPages = pageNumber === 1 ? lastPageNumber : pageNumber - 1;
    setPageNumber(loopPages);
  };

  useEffect(() => {
    setLastPageNumber(getLastPageNumber(toolList));
  }, [toolList]);

  return (
    <div className="paginate-container">
      <button
        type="button"
        className="btn"
        onClick={previousPage}
        disabled={lastPageNumber <= 1}
      >
        { '<' }
      </button>
      <p className="page-number">{ pageNumber }</p>
      <button
        type="button"
        className="btn"
        onClick={nextPage}
        disabled={lastPageNumber <= 1}
      >
        { '>' }
      </button>
    </div>
  );
}

PaginateList.propTypes = {
  children: PropTypes.objectOf(PropTypes.string),
}.isRequired;
