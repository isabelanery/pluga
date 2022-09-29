import React, { useState } from 'react';
import './Card.css';
import Modal from './Modal';

function Card(props) {
  const { data } = props;
  const { name, icon, color } = data;
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <div
        className="card-app"
        onClick={ () => setModalState(true)  }
      >
        <p>{ name }</p>

        <img src={ icon } alt={ name } style={ { "backgroundColor": color } } />

      </div>
      <Modal data={ data } isOpen={ modalState } updateModal={ setModalState } />
    </>
  );
}

export default Card;
