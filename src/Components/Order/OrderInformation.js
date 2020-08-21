import React from 'react';
import { Input, Select } from 'antd';

const OrderInformation = ({carrito, clientName, handleChange, ordenSeleccionada, historial}) => {
    const { Option } = Select;
    console.log(carrito)

    if (ordenSeleccionada) {
        return (
            <div><Select placeholder={ordenSeleccionada.mesa} disabled style={{ width: 175 }}></Select>
            <Input placeholder="Orden" disabled style={{ width: 175 }} value={'Orden: ' + ordenSeleccionada.orden} />
            <Input placeholder={ordenSeleccionada.nombreCliente} disabled /></div>
        )
    } else if (historial) {
        return (
            <div><Select placeholder={historial.mesa} disabled style={{ width: 175 }}></Select>
            <Input placeholder="Orden" disabled style={{ width: 175 }} value={'Orden: ' + historial.orden} />
            <Input placeholder={historial.nombreCliente} disabled /></div>
        )
    } else {
        return (
            <div><Select placeholder="Mesa" style={{ width: 175 }} onChange={handleChange} value={carrito.mesa}>
                <Option value="Mesa1">Mesa 1</Option>
                <Option value="Mesa2">Mesa 2</Option>
                <Option value="Mesa3" >Mesa 3</Option>
                <Option value="Mesa4">Mesa 4</Option>
            </Select>
            <Input placeholder="Orden" disabled style={{ width: 175 }} value={'Orden: ' + carrito.orden} />
            <Input placeholder="Nombre" onChange={clientName} value={carrito.nombreCliente}/></div>
        )
    }
}
 
export default OrderInformation;