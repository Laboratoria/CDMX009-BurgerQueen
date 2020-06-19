import React, { Component } from 'react'
import bqLogo from '../../img/burgerlogo.svg'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className='container form-container row'>
                <div className='col m7 right'>
                    <form onSubmit={this.handleSubmit} className='signin-form black'>
                        <div className="logo-burger center-align">
                            <img src={bqLogo} className='bq-logo' alt='logo'></img>
                        </div>
                        <div className='container'>
                            <h5 className='white-text center-align'>Inicio de Sesión</h5>
                            <div className='input'>
                                <label htmlFor='email'>Correo</label>
                                <input type='email' id='email' onChange={this.handleChange} />
                            </div>
                            <div className='input'>
                                <label htmlFor='password'>Contraseña</label>
                                <input type='password' id='password' onChange={this.handleChange} />
                            </div>
                            <div className='right-align'>
                                <a href="/" className='new-pass white-text'>Recuperar mi contraseña</a>
                            </div>
                        </div>
                        <div className='input center-align'>
                            <button className='grey lighten-1 btn-login'>Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn
