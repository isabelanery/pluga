import React from 'react';
import './Card.css';

function Card(props) {
  const { data: { name, icon, link, color } } = props;

  return (
    <div className="card-app">
      <p>{ name }</p>

      <img src={ icon } alt={ name } style={ { "background-color": color } } />
    </div>
  );
}

export default Card;
