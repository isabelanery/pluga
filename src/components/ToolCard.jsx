import React from 'react';
import './Card.css';

function ToolCard(props) {
  const { data, small, showName, openModal } = props;
  const { name, icon, color } = data;

  return (
    <div
      className={ `card-app ${small ? 'small' : '' }` }
      onClick={ openModal && openModal }
    >
      { showName && <p>{ name }</p> }
      <img src={ icon } alt={ name } style={ { "backgroundColor": color } } />
    </div>
  );
}

export default ToolCard;
