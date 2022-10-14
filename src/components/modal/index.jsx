import React, { useContext } from 'react';
import LastOpenedToolsRow from '../LastOpenedToolsRow';
import ToolCard from '../ToolCard';
import { AppContext } from '../../context/Provider';
import storage from '../../services/storage';
import './Modal.css';

export default function Modal() {
  const { isModalOpen: isOpen, setIsModalOpen, modalTool } = useContext(AppContext);
  const { link } = modalTool;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateLastOpenedList = () => {
    if (modalTool.name) storage.updateLastOpenedTools(modalTool);
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

          <a href={link} target="_blank" rel="noopener noreferrer">
            <ToolCard
              shouldShowName
              data={modalTool}
              onClick={updateLastOpenedList}
            />
          </a>
        </div>

        <LastOpenedToolsRow isOpen={isOpen} />
      </div>
    </div>
  );
}
