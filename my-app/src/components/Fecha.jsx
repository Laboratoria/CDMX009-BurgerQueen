import React from 'react';


const timestamp = Date.now();

const Fecha = () => {

    return (
        <div>
            {new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)}
        </div>
    );
}

export default Fecha;