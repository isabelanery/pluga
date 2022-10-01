import React, { useState } from 'react';
import Modal from './Modal';
import './Card.css';

function Card(props) {
  const { data } = props;
  const { app_id: id, name, icon, color } = data;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => {
    const lastOpened = JSON.parse(localStorage.getItem('lastOpened'));

    if (!lastOpened) localStorage.setItem('lastOpened', JSON.stringify([data]));

    if (lastOpened.find((app) => app.name === name)) return null;

    lastOpened.unshift(data);

    if (lastOpened.length > 3) lastOpened.pop();

    localStorage.setItem('lastOpened', JSON.stringify(lastOpened));

    console.log(lastOpened);
    setIsOpen(true);
  }

  return (
    <>
      <div className="card-app" onClick={ openModal }>

        <p>{ name }</p>

        <img src={ icon } alt={ name } style={ { "backgroundColor": color } } />

      </div>

      <Modal key={ `modal-${id}` } data={ data } isOpen={ isOpen } closeModal={ closeModal }  />
    </>
  );
}

export default Card;
