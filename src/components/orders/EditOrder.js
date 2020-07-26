import React, { Fragment, useState } from 'react';
import './edit-order.css';
import { useBreakfast } from '../dashboard/menuCards/BreakfastCards';
import { useDinner } from '../dashboard/menuCards/DinnerCards';

function EditOrder({ orderSelected }) {

    const desayunos = useBreakfast();
    const dinner = useDinner();

    const [newOrder, setNewOrder] = useState({
        productos: [],
        total: '',
    });

    const newProduct = newOrder.productos;

    const calculateTotal = (items = []) => items
        .reduce((acc, item) => console.log('calculate', acc, item) || (acc + item.price * item.quantity), 0);

    const addNewProduct = (product, quantity = 1) => {
        if (newOrder.productos.find(item => item.id === product.id)) {
            const productos = newOrder.productos
                .map((item) => item.id === product.id ? { ...item, quantity } : item);
            setNewOrder({
                ...newOrder,
                productos,
                total: calculateTotal(productos)
            });
        } else {
            const productos = [...newOrder.productos, { ...product, quantity }];
            setNewOrder({
                ...newOrder,
                productos,
                total: calculateTotal(productos)
            });
        }
    };

    return (
        <Fragment>
            <div id="modal2" className="modal scroll mod-edit-options">
                <div className='info-table-selected'>
                    <p className='table-num'>Mesa  {orderSelected.table}</p>
                </div>
                <div className="modal-content">
                    <div className='row actual-order'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='title-table-edit-order'>Productos ordenados</th>
                                    <th className='title-table-edit-order'>cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <button type='button' className=' btn-edit-modal'>X</button>
                                        {orderSelected.order.map((item) => (
                                            <p>{item.item}</p>
                                        ))}
                                    </td>
                                    <td>1 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='row add-products-order'>
                        <table className='table-new-items-added'>
                            <thead>
                                <th>Productos Agregados</th>
                                <th>Precio Unitario</th>
                                <th>cantidad</th>
                                <th>Precio total</th>
                            </thead>
                            <tbody>
                                {
                                    newProduct.map((item) => (
                                        <tr>
                                            <td>
                                                <button type='button'>X</button>
                                                <p>{item.item}</p>
                                            </td>
                                            <td>
                                                <button type='button' onClick={() => addNewProduct(item, item.quantity + 1)}>+</button>
                                                <p>{item.quantity}</p>
                                                <button type='button' onClick={() => addNewProduct(item, item.quantity - 1)}>-</button>
                                            </td>
                                            <td>
                                                <p> ${item.price}.00</p>
                                            </td>
                                            <td>
                                                <p>${item.price * item.quantity}.00</p>
                                            </td>
                                        </tr>

                                    )
                                    )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total: ${newOrder.total}.00 </td>
                                    <td>Productos agregados   {newOrder.productos.length} </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className='row menu-cards-modal'>
                        <div>
                            <table>
                                <tr>
                                    <th className='title-table-edit-order'>menu desayunos</th>
                                    <th className='title-table-edit-order'>menu comida</th>
                                </tr>
                                <tr>
                                    <td>
                                        {
                                            desayunos.map((desayuno) => (
                                                <p key={desayuno.id} onClick={() => { addNewProduct(desayuno); }}>{desayuno.item}</p>
                                            ))
                                        }
                                    </td>
                                    <td>
                                        {dinner.map((comida) => (
                                            <p key={comida.id} onClick={() => { addNewProduct(comida); }}>{comida.item}</p>
                                        ))
                                        }
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="modal-footer btn-accept">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat" >Aceptar</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}
export default EditOrder;
