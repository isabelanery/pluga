import React, { useState } from 'react';
import Modal from './Modal';
import './Card.css';

function Card(props) {
  const { data, small } = props;
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

    const duplicate = lastOpened.find((item) => item.name === name);

    if (duplicate) {
      const fromIndex = lastOpened.indexOf(duplicate);
      const toIndex = 0;

      lastOpened.splice(fromIndex, 1);
      lastOpened.splice(toIndex, 0, data);

      localStorage.setItem('lastOpened', JSON.stringify(lastOpened))
      setIsOpen(true);
      return null;
    }

    lastOpened.unshift(data);

    if (lastOpened.length > 3) lastOpened.pop();

    localStorage.setItem('lastOpened', JSON.stringify(lastOpened));
    setIsOpen(true);
  }

  return (
    <>
      <div
        className={ `card-app ${small && 'small'}` }
        onClick={ openModal }
      >

        <p>{ name }</p>

        <img src={ icon } alt={ name } style={ { "backgroundColor": color } } />

      </div>

      <Modal data={ data } isOpen={ isOpen } closeModal={ closeModal }  />
    </>
  );
}

export default Card;
