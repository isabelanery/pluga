import React from 'react';
import PropTypes from 'prop-types';
import './ToolCard.css';

export default function ToolCard(props) {
  const {
    data, small, shouldShowName, openModal,
  } = props;
  const { name, icon, color } = data;

  return (
    <div
      className={`card-app ${small ? 'small' : ''}`}
      onClick={openModal}
      role="button"
      onKeyPress={openModal}
      tabIndex={0}
    >
      { shouldShowName && <p>{ name }</p> }
      <img src={icon} alt={name} style={{ backgroundColor: color }} />
    </div>
  );
}

ToolCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
}.isRequired;
