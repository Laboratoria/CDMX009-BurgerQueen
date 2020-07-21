import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Pending from '../State/Pending';
import Ready from '../State/Ready';
import { db } from '../../../firebase/firebase-config';


const Modal = ({ onClose }) => {
  //Ejemplo de ordern 
  const [pending, changePending] = useState([]);
  useEffect(() => {
    const goPending = db.collection('orders').where('state', '==', 'pending').orderBy('date', 'desc');
    return goPending.onSnapshot(snapshotPending => {
      const pendingData = []
      snapshotPending.forEach(doc => pendingData.push({ ...doc.data(), id: doc.id }));
      changePending(pendingData);
    });
  }, []);
  const [ready, changeReady] = useState([]);
  useEffect(() => {
    const goReady = db.collection('orders').where('state', '==', 'ready').orderBy('date', 'desc');
    return goReady.onSnapshot(snapshotReady => {
      const readyData = []
      snapshotReady.forEach(doc => readyData.push({ ...doc.data(), id: doc.id }));
      changeReady(readyData);
    });
  }, []);

  const done = (
    <div className="modal-background">
      <div className='modal' >
        <div className='modal-contenido'>
          <a><i className='fa fa-times icon-close modal-close' onClick={onClose}></i></a>
          <br /><br />
          <div className='headerList'>
            <div className='titulo-list'></div>
            <div className='titulo-list'>No. Mesa</div>
            <div className='titulo-list'>Status</div>
            <div className='titulo-list'></div>
          </div>
          <br />
          {pending.map((pendings) => (
            <Pending
              key={pendings.id}
              pendings={pendings}
              pending={pending}
              changePending={changePending}
            />
          )
          )
          }
          {ready.map((readys) => (
            <Ready
              key={readys.id}
              readys={readys}
              ready={ready}
              changeReady={changeReady}
            />
          )
          )
          }
        </div>
      </div>

    </div>

  )
  return ReactDOM.createPortal(done, document.querySelector("#modal-root"))
}

export default Modal; 