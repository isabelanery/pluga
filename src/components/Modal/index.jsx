import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import LastOpenedToolsRow from '../LastOpenedToolsRow';
import { AppContext } from '../../context/Provider';
import './Modal.css';
import ToolCardWithModal from '../ToolCardWithModal';

export default function Modal() {
  const { isModalOpen: isOpen, setIsModalOpen, modalTool } = useContext(AppContext);
  const { link } = modalTool;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`modal-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-wrapper">
        <button
          type="button"
          className="close"
          onClick={closeModal}
        >
          &times;
        </button>

        <div className="modal-content">
          <div className="details">
            <p>Ver mais detalhes:</p>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </div>

          <ToolCardWithModal
            shouldShowName
            data={modalTool}
          />
        </div>

        <LastOpenedToolsRow isOpen={isOpen} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
}.isRequired;
