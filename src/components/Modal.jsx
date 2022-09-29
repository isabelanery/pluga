import React from 'react';

function Modal(props) {
  const { data } = props;
  const { link, id } = data;

  return (
    <div className="modal fade" id={`modal-${id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Detalhes</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <div className="modal-body">
            <a href={ link } target="_blank" rel="noreferrer">{ link }</a>
          </div>

          {/* apps component */}

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
