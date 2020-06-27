import React, { Fragment, useState } from 'react';


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
        console.log('cliente-- ' + datos.nombre + ' ' + 'comensales-- ' + datos.numeroComensales + ' mesa-- ' + datos.numeroMesa)
        console.log(datos)
    }

    return (
        <Fragment>
            <div class="row">
                <div class="col m12">
                    <form onSubmit={enviarDatos}>
                        <div>
                            <input
                                placeholder='Ingrese Nombre del cliente'
                                type='text'
                                name='nombre'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Numero de mesa'
                                type='text'
                                name='numeroMesa'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <input
                                placeholder='Numero de Comensales'
                                type='text'
                                name='numeroComensales'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <h3>{datos.nombre} {datos.numeroComensales} {datos.numeroMesa}</h3>
        </Fragment >
    )
}

export default ClientInfoForm;
