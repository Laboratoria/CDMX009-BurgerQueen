import React from 'react';
// import { withRouter } from 'react-router-dom'
import logo from '../../assets/logo-rocky.png'
import './StyleNavigation.css'

function Navigation (props){
    const { history } = props;
    return (
        <React.Fragment>
            <div className="contentHeader"> 
                <nav className="navigation">
                    <button
                        onClick = { () => history.push('/ordenar')}
                    >
                        Ordenar
                    </button>
                    <button
                        onClick = { () => history.push('/produccion')}
                    >
                        Producción
                    </button>
                    <button
                        onClick = { () => history.push('/finalizadas')}
                    >
                        Finalizadas
                    </button>
                </nav>
                <div className="ContentLogo">
                <img className="logo" alt="logo" src={logo}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default  Navigation