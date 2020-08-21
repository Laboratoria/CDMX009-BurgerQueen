import React from 'react';
import { Input, Select, Divider } from 'antd';
import Button from '../Button/Button';

const ClosingOrder = ({carrito, total, guardar, mesero, ordenSeleccionada, finishOrder, historial, pagar}) => {
    const { Option } = Select;
    
    const timer = () => {
        const timeIn = historial.fecha;
        const timeOut= historial.finish;
        const dif = (timeOut - timeIn)
        const minutes = Math.round((dif/1000)/60)
        return minutes
    }

    

    if (ordenSeleccionada) {
        return (
            <div>
                <div className='btnOrder'>
                    <h4>Total: ${ordenSeleccionada.total}</h4>
                    <Button value ='Terminar' enter onClick={finishOrder}/>
                </div>
            <div>
                <Divider />
                <Input.Group compact>
                    <Select placeholder={ordenSeleccionada.mesero} disabled style={{ width: 175 }}></Select>
                    <Input style={{ width: '50%' }} disabled value={new Date (ordenSeleccionada.fecha)}/>
                </Input.Group>
            </div>
        </div>
        )
    } else if (historial) {
        return (
            <div>
                {
                    timer() ?(<h6>La orden se realizo en: {timer()} minutos</h6>) : (<></>)
                }
                <Button enter value = 'Pagar' onClick ={pagar}></Button>
            <div>
                <Divider />
                <Input.Group compact>
                    <Select placeholder={historial.mesero} disabled style={{ width: 175 }}></Select>
                    <Input style={{ width: '50%' }} disabled value={new Date(historial.fecha)}/>
                </Input.Group>
            </div>
        </div>
        )
    } else {
        return (
            <div>
                <div className='btnOrder'>
                    <h4>Total: ${total}</h4>
                    <Button value ='Ordenar' enter onClick={guardar}/>
                </div>
            <div>
                <Divider />
                <Input.Group compact>
                    <Select placeholder="Mesero" style={{ width: 175 }} onChange={mesero} value={carrito.mesero} >
                        <Option value="Mesero1">Mesero 1</Option>
                        <Option value="Mesero2">Mesero 2</Option>
                    </Select>
                    <Input style={{ width: '50%' }} disabled value={new Date()}/>
                </Input.Group>
            </div>
        </div>
        )
    }
}
 
export default ClosingOrder