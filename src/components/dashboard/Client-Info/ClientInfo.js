import React, { Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { M } from 'materialize-css'


const ClientInfoForm = ({ datos, setDatos }) => {

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
                    <div className='col m12'>
                        <div className='info-container'>
                            <input
                                placeholder='Ingrese Nombre del cliente'
                                type='text'
                                name='nombre'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col m6'>
                        <div className="btn-dropdown info-container ">
                            <select name='numeroMesa' onChange={handleInputChange}>
                                <option value="" disabled selected>Elige una mesa</option>
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
                    <div className='col m6'>
                        <div className="btn-dropdown info-container ">
                            <select name='numeroComensales' onChange={handleInputChange}>
                                <option value="" disabled selected>Numero de comensales</option>
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
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>
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
