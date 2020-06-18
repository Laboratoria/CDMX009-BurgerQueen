import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password:''
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
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Iniciar Sesión</h5>
                    <div className='input'>
                        <label htmlFor='email'>Correo</label>
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div className='input'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div className='input'>
                        <button className='btn pink lighten-1'>Ingresar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
