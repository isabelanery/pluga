import React from 'react';
import PropTypes from 'prop-types';
import LastOpened from './LastOpened';
import ToolCard from './ToolCard';
import './Modal.css';

export default function Modal(props) {
  const {
    data: { link }, data, isOpen, closeModal,
  } = props;

  return (
    <div className={`modal-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-wrapper">
        <span
          className="close"
          onClick={closeModal}
          role="button"
          onKeyPress={closeModal}
          tabIndex={0}
        >
          &times;
        </span>

        <div className="modal-content">
          <div className="details">
            <p>Ver mais detalhes:</p>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </div>

          <ToolCard showName data={data} />
        </div>

        <LastOpened isOpen={isOpen} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
}.isRequired;
