import React, { useState } from 'react';
import Modal from './Modal';
import ToolCard from './ToolCard';

export default function CardWithModal(props) {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const listLastOpenedTools = () => {
    const lastOpened = JSON.parse(localStorage.getItem('lastOpened'));

    if (!lastOpened) {
      localStorage.setItem('lastOpened', JSON.stringify([data]))
      setIsOpen(true);
      return null;
    };

    const duplicate = lastOpened.find((item) => item.name === data.name);

    if (duplicate) lastOpened.splice(lastOpened.indexOf(duplicate), 1);

    lastOpened.unshift(data);

    if (lastOpened.length > 3) lastOpened.pop();

    localStorage.setItem('lastOpened', JSON.stringify(lastOpened));
  }

  const openModal = () => {
    listLastOpenedTools();
    setIsOpen(true);
  }

  return (
    <>
      <ToolCard data={ data } showName openModal={ openModal } />

      <Modal data={ data } isOpen={ isOpen } closeModal={ closeModal }  />
    </>
  );
}
