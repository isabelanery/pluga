import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ToolCard from '../ToolCard';
import './LastOpenedToolsRow.css';

export default function LastOpenedToolsRow(props) {
  const { isOpen } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    const lastOpened = JSON.parse(localStorage.getItem('lastOpened')) || [];
    if (lastOpened.length > 3) lastOpened.shift();
    setList(lastOpened);
  }, [isOpen]);

  return (
    <div className="last-opened-container">
      Últimas ferramentas visualizadas
      <div className="last-opened">
        { // refactor loading
          list.length > 0 && list.map((app, index) => (
            <ToolCard small data={app} key={`last-opened-${index + 1}`} />
          ))
        }
      </div>
    </div>
  );
}

LastOpenedToolsRow.propTypes = {
  isOpen: PropTypes.boolean,
}.isRequired;
