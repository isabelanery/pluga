import React from 'react';
import './Card.css';
import Modal from './Modal';

function Card(props) {
  const { data } = props;
  const { app_id, name, icon, color } = data;

  return (
    <>
      <div
        className="card-app"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${app_id}`}
      >
        <p>{ name }</p>

        <img src={ icon } alt={ name } style={ { "backgroundColor": color } } />

      </div>
      <Modal data={ data } />
    </>
  );
}

export default Card;
