import React from 'react';
import { Col, Row, Button } from 'antd';

const Pendings = ({orders, getSelectedOrder, historial}) => {
    
    const style = {
        backgroundColor: '#4B9935'
    }

    return ( 
        <Col className='order' size='large' span={14}>
            <div>
                {
                    historial ? (<h3>Historial</h3>) : <h3>Pendientes</h3>
                }
            </div>
            <Row className='pendings'>
                {
                    orders.map(order => (
                        <Col className='pendingOrders' key={order.id} span={14}>

                             <Button style={order.pay ? style : {}} type="primary" className='pendingOrderButton' onClick={() => getSelectedOrder(order.id)}>{order.orden} - {order.nombreCliente}</Button>
                            
                        </Col>
                    )) 
                }
            </Row>
        </Col>
     );
}
 
export default Pendings;