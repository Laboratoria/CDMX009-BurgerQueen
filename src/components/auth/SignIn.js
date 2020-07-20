
import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase/firebaseConfig';
import ModalAuth from '../auth/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bqLogo from '../BQ/images/logo.svg';
import '../auth/auth.css';

const SignIn = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            login()
        }
        catch (err) {
            console.log(err)
        }
    };

    const login = useCallback(async () => {
        try {
            const res = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(res);
            props.history.push('/');
        } catch (error) {
            console.log(error);
            if (error.code === 'auth/invalid-email') {
                toast.error('Verifica tu correo', {
                    className: 'toast-success',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            if (error.code === 'auth/user-not-found') {
                toast.error('Email no encontrado', {
                    className: 'toast-success',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            if (error.code === 'auth/wrong-password') {
                toast.error('Contraseña incorrecta', {
                    className: 'toast-success',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }

    },
        [email, password, props.history],
    )
    return (
        <div className='initial-image'>
            <div className='container form-container row'>
                <div className='col m7 right'>
                    <form className='signin-form'>
                        <div className="logo-burger center-align">
                            <img src={bqLogo} className='bq-logo' alt='logo'></img>
                        </div>
                        <div className='container'>
                            <h5 className='white-text center-align'>Inicio de Sesión</h5>
                            <div className='input'>
                                <label htmlFor='email' >Correo</label>
                                <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='input'>
                                <label htmlFor='password'>Contraseña</label>
                                <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='right-align'>
                                <p className='new-pass white-text' onClick={() => { setModalIsOpen(true) }}>Recuperar mi contraseña</p>
                                <ModalAuth modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
                            </div>
                        </div>

                        <div className='input center-align'>
                            <button className='black btn-log-in white-text' data-testid='log-btn' onClick={submit}>Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SignIn);
