import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../context/Provider';
import { getLastPageNumber } from '../../services/pagination';

export default function PaginateList({ toolList }) {
  const { pageNumber, setPageNumber } = useContext(AppContext);
  const [lastPageNumber, setLastPageNumber] = useState();
  const [isPaginateBtnDisabled, setIsPaginateBtnDisabled] = useState(false);

  const verifyPaginateBtns = (toolsArray) => {
    setLastPageNumber(getLastPageNumber(toolsArray));
    const shouldAbleBtns = lastPageNumber <= 1;
    setIsPaginateBtnDisabled(shouldAbleBtns);
  };

  const nextPage = () => {
    const loopPages = pageNumber === lastPageNumber ? 1 : pageNumber + 1;
    setPageNumber(loopPages);
  };

  const previousPage = () => {
    const loopPages = pageNumber === 1 ? lastPageNumber : pageNumber - 1;
    setPageNumber(loopPages);
  };

  useEffect(() => {
    verifyPaginateBtns(toolList);
  }, [toolList]);

  return (
    <>
      <button
        type="button"
        className="btn"
        onClick={previousPage}
        disabled={isPaginateBtnDisabled}
      >
        { '<' }
      </button>
      <p>{ pageNumber }</p>
      <button
        type="button"
        className="btn"
        onClick={nextPage}
        disabled={isPaginateBtnDisabled}
      >
        { '>' }
      </button>
    </>
  );
}

PaginateList.propTypes = {
  children: PropTypes.objectOf(PropTypes.string),
}.isRequired;
