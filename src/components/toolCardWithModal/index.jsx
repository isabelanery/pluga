import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import ToolCard from '../ToolCard';
import storage from '../../services/storage';

export default function ToolCardWithModal(props) {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    storage.updateLastOpenedTools(data);
    setIsOpen(false);
  };

  return (
    <>
      <ToolCard data={data} showName openModal={openModal} />

      <Modal data={data} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

ToolCardWithModal.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
}.isRequired;
