import { useEffect, useState } from 'react';
import Card from './Card';
import './Modal.css';

export default function Modal(props) {
  const { data, isOpen, closeModal } = props;
  const { link } = data;

  const [list, setList] = useState([]);

  useEffect(() => {
    const lastOpened = JSON.parse(localStorage.getItem('lastOpened'));

    setList(lastOpened);
  }, [isOpen]);


  return (
    <div className={ `modal-container ${ isOpen ? 'open' : 'closed' }`} >
      <div className="modal-wrapper">
        <span className="close" onClick={ closeModal} >&times;</span>

          <div className="modal-content">
            <p>Ver mais detalhes:</p>

            <a href={ link } target="_blank" rel="noopener noreferrer">{ link }</a>
          </div>

          <div className="last-viewed">
            {
              isOpen && list.map((app, index) => <Card data={ app } key={ `last-opened-${index + 1}` } />)
            }
          </div>
      </div>
    </div>
  )
}
