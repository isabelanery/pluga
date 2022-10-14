import React from 'react';
import './ToolCard.css';

export default function ToolCard(props) {
  const {
    data: { name, icon, color }, small, shouldShowName, onClick,
  } = props;

  return (
    <div
      className={`card-app ${small ? 'small' : ''}`}
      onClick={onClick}
    >
      { shouldShowName && <p>{ name }</p> }
      <img src={icon} alt={name} style={{ backgroundColor: color }} />
    </div>
  );
}
