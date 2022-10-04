import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ToolCard from '../ToolCard';
import './LastOpenedToolsRow.css';
import storage from '../../services/storage';

export default function LastOpenedToolsRow(props) {
  const { isOpen } = props;
  const [toolsList, setToolsList] = useState([]);

  useEffect(() => {
    const lastOpenedTools = storage.getLastOpenedTools();
    setToolsList(lastOpenedTools);
  }, [isOpen]);

  return (
    <div className="last-opened-container">
      {
      toolsList.length > 0
        && (
          <>
            <p>
              Últimas ferramentas visualizadas
            </p>
            <div className="last-opened">
              {
              toolsList.map((app) => (
                <ToolCard small data={app} key={`last-opened-${app.app_id}`} />
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
