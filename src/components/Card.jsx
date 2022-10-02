import React, { useState } from 'react';
import Modal from './Modal';
import './Card.css';
import ToolCard from './ToolCard';

function Card(props) {
  const { data } = props;
  const { name } = data;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => {
    const lastOpened = JSON.parse(localStorage.getItem('lastOpened'));

    if (!lastOpened) {
      localStorage.setItem('lastOpened', JSON.stringify([data]))
      setIsOpen(true);
      return null;
    };

    const duplicate = lastOpened.find((item) => item.name === name);

    if (duplicate) lastOpened.splice(lastOpened.indexOf(duplicate), 1);

    lastOpened.unshift(data);

    if (lastOpened.length > 3) lastOpened.pop();

    localStorage.setItem('lastOpened', JSON.stringify(lastOpened));
    setIsOpen(true);
  }

  return (
    <>
      <ToolCard data={ data } showName openModal={ openModal } />

      <Modal data={ data } isOpen={ isOpen } closeModal={ closeModal }  />
    </>
  );
}

export default Card;
