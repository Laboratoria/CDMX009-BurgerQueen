import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/logo-rocky.png'
import './StyleNavigation.css'

const Navigation = (props) =>{
    const { history } = props
    return (
        <React.Fragment>
            <div className="contentHeader">
                <nav className="navigation">
                    <button onClick={() => history.push('/')}>
                        Ordenar
                    </button>
                    <button onClick={() => history.push('/Kitchen')}>
                        Cocina
                    </button>
                    <button onClick={() => history.push('/Finish')}>
                        Finalizar
                    </button>
                </nav>
                <div className="ContentLogo">
                <img className="logo" alt="logo" src={logo}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter (Navigation);