import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './List.css';

function List() {
  const [apps, setApps] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getList = async () => {
    const { data } = await axios.get('https://pluga.co/ferramentas_search.json');

    setApps(data);
  }

  const paginate = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  const nextPage = () => {
    const page = pageNumber === 6 ? 1 : pageNumber + 1;
    setPageNumber(page);
  };

  useEffect(() =>{
    getList();
  }, []);

  return (
    <div className="list-container">
      <div className="list-wrapper">
        {
          apps.length > 0
            && paginate(apps, 11, pageNumber)
              .map((app, i) => <Card data={ app } key={ `app-card-${i}` } /> )
        }
      </div>

      <button
        type="button"
        className="btn"
        onClick={ nextPage }
      >
        { '>' }
      </button>
    </div>
  );
}

export default List;
