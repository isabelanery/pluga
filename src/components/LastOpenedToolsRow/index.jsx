import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ToolCard from '../ToolCard';
import './LastOpenedToolsRow.css';
import storage from '../../services/storage';

export default function LastOpenedToolsRow(props) {
  const { isOpen } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    const lastOpenedTools = storage.getLastOpenedTools();
    setList(lastOpenedTools);
  }, [isOpen]);

  return (
    <div className="last-opened-container">
      {
      list.length > 0
        && (
          <>
            <p>
              Últimas ferramentas visualizadas
            </p>
            <div className="last-opened">
              {
              list.map((app, index) => (
                <ToolCard small data={app} key={`last-opened-${index + 1}`} />
              ))
              }
            </div>
          </>
        )
      }
    </div>
  );
}

LastOpenedToolsRow.propTypes = {
  isOpen: PropTypes.boolean,
}.isRequired;
