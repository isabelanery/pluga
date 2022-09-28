import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './List.css';

function List() {
  const [apps, setApps] = useState([]);

  const getList = async () => {
    const { data } = await axios.get('https://pluga.co/ferramentas_search.json');

    setApps(data);
  }

  useEffect(() =>{
    getList();
  }, []);

  return (
    <div className="list-container">
      {
        apps.length > 0
          && apps.map((app, i) => <Card data={ app } key={ `app-card-${i}` } /> )
      }
    </div>
  );
}

export default List;
