import { useEffect, useState } from 'react';
import './Modal.css';
import ToolCard from './ToolCard';

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
          <div className="details">
            <p>Ver mais detalhes:</p>
            <a href={ link } target="_blank" rel="noopener noreferrer">{ link }</a>
          </div>

          { isOpen && <ToolCard showName data={ data } />}
        </div>

        <div className="last-opened-container">
          Últimas ferramentas visualizadas
          <div className="last-opened">
            {
              isOpen
                && list.map((app, index) => (
                  <ToolCard small data={ app } key={ `last-opened-${index + 1}` }/>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
