import React from 'react';
import './Card.css';

function Card(props) {
  const { data: { name, icon, link, color } } = props;

  return (
    <div className="card-app" style={ {
      // "background-color": color,
      } }>
      <p>{ name }</p>

      <div className="bg-color" >
        <img
          src={ icon }
          alt={ name }
          style={ {
            "box-shadow": `0rem 0rem 0.8rem 1rem ${color}`,
            "background-color": color,
            } }/>
      </div>
    </div>
  );
}

export default Card;
