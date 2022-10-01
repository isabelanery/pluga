import React, { useState } from 'react';
import Modal from './Modal';
import './Card.css';

function Card(props) {
  const { data } = props;
  const { name, icon, color } = data;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => {
    const lastOpened = JSON.parse(localStorage.getItem('lastOpened'));

    if (!lastOpened) {
      localStorage.setItem('lastOpened', JSON.stringify([data]))
      setIsOpen(true);
      return null;
    };

    const removeDuplicate = lastOpened.filter((item) => item.name !== name);
    removeDuplicate.unshift(data);

    if (removeDuplicate.length > 4) removeDuplicate.pop();

    localStorage.setItem('lastOpened', JSON.stringify(removeDuplicate));
    setIsOpen(true);
  }

  return (
    <>
      <div className="card-app" onClick={ openModal }>

        <p>{ name }</p>

        <img src={ icon } alt={ name } style={ { "backgroundColor": color } } />

      </div>

      <Modal data={ data } isOpen={ isOpen } closeModal={ closeModal }  />
    </>
  );
}

export default Card;
