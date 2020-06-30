import React, { Fragment, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { M } from 'materialize-css'
import '../client-Info/clientInfo.css'



const ClientInfoForm = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        numeroMesa: '',
        numeroComensales: '',
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        console.log(datos)
    }

    return (
        <Fragment>
            <form className='form-container' onSubmit={enviarDatos}>
                <div className='row'>
                    <div className='col m3'>
                        <div className="btn-dropdown info-container select-number table-number">
                            <select name='numeroMesa' onChange={handleInputChange}>
                                <option value="" disabled selected>Nº mesa</option>
                                <option className='white-text' value="1" >Mesa 1</option>
                                <option value="2" >Mesa 2</option>
                                <option value="3" >Mesa 3</option>
                                <option value="4" >Mesa 4</option>
                                <option value="5" >Mesa 5</option>
                                <option value="6" >Mesa 6</option>
                                <option value="7" >Mesa 7</option>
                                <option value="8" >Mesa 8</option>
                                <option value="9" >Mesa 9</option>
                                <option value="10" >Mesa 10</option>
                            </select>
                        </div>
                    </div>
                    <div className='col m3'>
                        <div className="btn-dropdown info-container select-number person-number">
                            <select name='numeroComensales' onChange={handleInputChange}>
                                <option value="" disabled selected>Nº comensales</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className='row client-name'>
                            <div className='col m4 right test'>
                                <div className='info-container client-input'>
                                    <input
                                        placeholder='Cliente'
                                        type='text'
                                        name='nombre'
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                </div>
                <div className='row btn-container'>
                    <button className='btn-submit' type='submit'>Enviar</button>
                </div>
            </form>
        </Fragment >
    )
}

export default ClientInfoForm;
