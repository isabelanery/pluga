import React, { useContext, useEffect, useState } from 'react';
import storage from '../../services/storage';
import { AppContext } from '../../context/Provider';
import ToolCardWithModal from '../ToolCardWithModal';
import './LastOpenedToolsRow.css';

export default function LastOpenedToolsRow() {
  const { modalTool, isModalOpen } = useContext(AppContext);
  const [toolsList, setToolsList] = useState([]);

  useEffect(() => {
    const lastOpenedTools = storage.getLastOpenedTools();

    if (modalTool.name) storage.updateLastOpenedTools(modalTool);

    setToolsList(lastOpenedTools);
  }, [modalTool, isModalOpen]);

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
                <ToolCardWithModal small data={app} key={`last-opened-${app.app_id}`} />
              ))
              }
            </div>
          </>
        )
      }
    </div>
  );
}
