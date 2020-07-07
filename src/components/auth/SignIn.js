import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import bqLogo from '../BQ/images/logo.svg';
import '../auth/auth.css';

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async (e, error) => {
        e.preventDefault();
        await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(user.email, 'ha iniciado sesión');
    }

    return (
        <div className='initial-image'>
            <div className='container form-container row'>
                <div className='col m7 right '>
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
                                <a href='/' className='new-pass white-text'>Recuperar mi contraseña</a>
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
