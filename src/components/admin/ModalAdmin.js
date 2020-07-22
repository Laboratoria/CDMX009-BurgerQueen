import React, { useState, useCallback } from 'react';
import { firebase } from '../../firebase/firebaseConfig';
import './admin.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalAdmin = ( { user, setUser } ) => {

    const submit = async e => {
        e.preventDefault();
        try {
            register()
        } catch (error) {
            console.log(error);
        }

    }

    const [newEmail, setNewEmail] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newName, setNewName] = useState('');
    const [newWork, setNewWork] = useState('');

    const register = useCallback(async (e) => {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(newEmail, newPass)
            console.log(res); //res.uid
            const userInfo = {
                email: res.user.email,
                uid: res.user.uid,
                name: newName,
                workstation: newWork
            }
            await firebase.firestore().collection('users').doc(res.user.email).set(userInfo)
                   setUser([
                ...user,
                {...userInfo, id:  res.user.id} ])

            

            setNewEmail('');
            setNewName('');
            setNewPass('');
            setNewWork('')
        } catch (error) {
            if (error.code === 'auth/email-already-in-use')
                toast.error('Email en uso', {
                    className: 'toast-success',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
        }
    },
        [newPass, newEmail, newName, setUser, user, newWork],
    )

    return (
        <div className='container'>
            <a className="waves-effect waves-light btn modal-trigger add-btn add-text black-text" href="#modal1">Agregar</a>
            <div >
                <div id="modal1" className="modal black">
                    <div className="modal-content text-font">
                        <h4 className='white-text'>Registrar personal</h4>
                    </div>
                    <div className='container'>
                        <form>
                            <input
                                className='ipt'
                                type='text'
                                onChange={e => setNewName(e.target.value)}
                                value={newName}
                                placeholder='Nombre'
                            />
                            <input
                                className='ipt'
                                type='text'
                                onChange={e => setNewWork(e.target.value)}
                                value={newWork}
                                placeholder='Estación'
                            />
                            <input
                                className='ipt'
                                type='email'
                                onChange={e => setNewEmail(e.target.value)}
                                value={newEmail}
                                placeholder='Correo'
                            />
                            <input
                                className='ipt'

                                type='password'
                                onChange={e => setNewPass(e.target.value)}
                                value={newPass}
                                placeholder='Contraseña'
                            />
                        </form>
                    </div>
                    <div className="modal-footer black register-btn">
                        <a
                            href="#!"
                            className="modal-close waves-effect waves-green btn-flat white-text center-align register-text"
                            onClick={submit}
                        >Registrar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAdmin;