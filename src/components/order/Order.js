import React from 'react'


function Orders() {

    const [datos, setDatos] = useState({
        cliente: 'Brenda',
        mesa: '5',
        productos: ['hamburguesa', 'refresco', 'papas fritas'],
        status: 'pendiente',
        pagado: 'no pagado',
    })

    return (
        <div>
            <h1>orders</h1>
            <div className='post-it'>
                <div>
                    <p>{cliente}</p>
                    <p>{mesa}</p>
                    <p>{productos}</p>
                    <p>{status}</p>
                    <p>{pagado}</p>
                </div>
            </div>
        </div>
    )
}

export default Orders;