import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal';
import ToolCard from '../toolCard';

export default function CardWithModal(props) {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const listLastOpenedTools = () => {
    const lastOpened = JSON.parse(localStorage.getItem('lastOpened'));

    if (!lastOpened) {
      localStorage.setItem('lastOpened', JSON.stringify([data]));
      setIsOpen(true);
      return null;
    }

    const duplicate = lastOpened.find((item) => item.name === data.name);

    if (lastOpened.indexOf(duplicate) === 0) lastOpened.splice(lastOpened.indexOf(duplicate), 1);

    lastOpened.unshift(data);

    if (lastOpened.length > 4) lastOpened.pop();

    localStorage.setItem('lastOpened', JSON.stringify(lastOpened));
    return null;
  };

  const openModal = () => {
    listLastOpenedTools();
    setIsOpen(true);
  };

  return (
    <>
      <ToolCard data={data} showName openModal={openModal} />

      <Modal data={data} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

CardWithModal.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
}.isRequired;
