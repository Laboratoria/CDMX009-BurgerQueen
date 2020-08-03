import React, { Fragment } from 'react';
import Modal from 'react-modal';
import './auth.css';

const ModalAuth = ({ modalIsOpen, setModalIsOpen }) => {

  return (
    <Fragment>
      <Modal isOpen={modalIsOpen} >
        <div>
          <span className="material-icons close" onClick={() => { setModalIsOpen(false); }} >close</span>
        </div>
        <div>
          <p className='center-align instruction'>Ingresa tu correo para recuperar tu contraseña</p>
          <input type='email' className='email-input black-text' ></input>
        </div>
        <div className='submit-btn center-align'>
          <button className='send-btn'>Enviar</button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ModalAuth;