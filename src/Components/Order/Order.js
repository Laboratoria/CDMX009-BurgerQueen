import React from 'react'
import './Order.scss'; 
import { Col } from 'antd';
import OrderInformation from './OrderInformation'
import OrderContent from './OrderContent'
import ClosingOrder from './ClosingOrder'

const Order = ({carrito, setCarrito, deleteProducto, total, guardar, clientName, handleChange, nuevoCarrito, ordenSeleccionada, finishOrder, historial,pagar}) => {
    const mesero = (value) => {
        setCarrito({...carrito, mesero: value})
    }

 return ( 
        <Col className='order' size='large' span={9} >
            <OrderInformation carrito={carrito} clientName={clientName} handleChange={handleChange} ordenSeleccionada={ordenSeleccionada} historial={historial} />
            <OrderContent carrito={carrito} deleteProducto={deleteProducto} nuevoCarrito={nuevoCarrito} ordenSeleccionada={ordenSeleccionada} historial={historial} />
            <ClosingOrder carrito={carrito} total={total} guardar={guardar} mesero={mesero} ordenSeleccionada={ordenSeleccionada} finishOrder={finishOrder} historial={historial} pagar={pagar} />
        </Col>
     );
}
 
export default Order;