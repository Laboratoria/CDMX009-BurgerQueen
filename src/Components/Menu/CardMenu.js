import React from 'react';
import { Card, Col } from 'antd';
import ModalMenu from './ModalMenu';


const CardMenu = ({item,  carrito, addProducto }) => {
    const { Meta } = Card;
    return ( 
        <Col span={12}>
            <Card className='card' cover={<img alt="example" src={item.imagen}/>}>
                <Meta title={item.item} description={'$ ' + item.precio} />
                <ModalMenu item={item}  carrito={carrito} addProducto={addProducto} />
            </Card>
        </Col>
     );
}

export default CardMenu;



