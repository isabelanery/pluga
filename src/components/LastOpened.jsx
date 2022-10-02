import React, { useEffect, useState } from 'react';
import ToolCard from './ToolCard';
import './LastOpened.css';

export default function LastOpened() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const lastOpened = JSON.parse(localStorage.getItem('lastOpened'));
    setList(lastOpened);
  }, []);

  return (
    <div className="last-opened-container">
      Últimas ferramentas visualizadas
      <div className="last-opened">
        {
          list.map((app, index) => (
            <ToolCard small data={app} key={`last-opened-${index + 1}`} />
          ))
        }
      </div>
    </div>
  );
}
