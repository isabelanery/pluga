import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

function Provider(props) {
  const { children } = props;
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTool, setModalTool] = useState({});

  const contextValue = useMemo(() => ({
    pageNumber,
    setPageNumber,
    isModalOpen,
    setIsModalOpen,
    modalTool,
    setModalTool,
  }), [pageNumber, isModalOpen, modalTool]);

  return (
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default Provider;
