import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import 'firebase/auth';
import bqLogo from '../BQ/images/logo.svg';
import firebase from 'firebase';
import ModalAuth from '../auth/Modal';
import '../auth/auth.css';

const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = firebase.auth().onAuthStateChanged((fbUser) => {
            console.log('firebase user', fbUser)
            setUser(fbUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    return { user, setUser, loading }
};

const SignIn = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { user, loading } = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (user && !loading) {
        return <Redirect to="/" />;
    };

    const submit = async (e) => {
        e.preventDefault();
        await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(user && user.email, 'ha iniciado sesión');
    };

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
                            <button className='black btn-login white-text' onClick={submit}>Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignIn;
