import React, { Fragment, useState } from 'react';
import './edit-order.css';
import editLogo from './images/edit.svg';
import { useBreakfast } from '../dashboard/menuCards/BreakfastCards';
import { useDinner } from '../dashboard/menuCards/DinnerCards';

function EditOrder() {

    const desayunos = useBreakfast();
    const dinner = useDinner();

    const [newOrder, setNewOrder] = useState({
        productos: [],
        total: '',
    });

    /*     const [orderSelected, setOrderSelected] = useState({
            numeroMesa: '',
            numeroComensales: '',
            productos: [],
            total: '',
            propina: '',
            nuevoTotal: '',
            metodoPagar: '',
        }) */

    const totalPrice = newOrder.productos.reduce((acc, curr) => acc + curr.price, 0);

    const addNewProductBreakfast = (producto) => {
        setNewOrder({ newOrder, productos: [...newOrder.productos, producto] });
    };

    const addNewProductDinner = (producto) => {
        setNewOrder({ newOrder, productos: [...newOrder.productos, producto] });
    };

    const newProduct = newOrder.productos;

    return (
        <Fragment>
            <div id="modal2" className="modal scroll">
                <div className="modal-content">
                    <div className='row actual-order'>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Productos ordenados</th>
                                    <th>cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <button type='button' className='btn-edit-modal' ><img src={editLogo} className='img-edit-modal' alt='editLogo' /></button>
                                        <button type='button' className=' btn-edit-modal'>X</button>
                                    </td>
                                    <td>sandwich jamon con queso </td>
                                    <td>1 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='row add-products-order'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Productos Agregados</th>
                                    <th>cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {
                                            newProduct.map((item) => (
                                                <div>
                                                    <td className='products-table'>
                                                        <button type='button' className=' btn-edit-modal'>X</button>
                                                    </td>
                                                    <td>
                                                        <p key={item.id}> {item.item}</p>
                                                    </td>
                                                    <td>
                                                        <p key={item.id}> ${item.price}.00</p>
                                                    </td>
                                                    <td>2</td>
                                                </div>
                                            )
                                            )}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total: {totalPrice} </td>
                                    <td>Productos agregados   {newOrder.productos.length} </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className='row menu-cards-modal'>
                        <div>
                            <table>
                                <tr>
                                    <th>menu desayunos</th>
                                    <th>menu comida</th>
                                </tr>
                                <tr>
                                    <td>
                                        {
                                            desayunos.map((desayuno) => (
                                                <p key={desayuno.id} onClick={() => { addNewProductBreakfast(desayuno); }}>{desayuno.item}</p>
                                            ))
                                        }
                                    </td>
                                    <td>
                                        {dinner.map((comida) => (
                                            <p key={comida.id} onClick={() => { addNewProductDinner(comida); }}>{comida.item}</p>
                                        ))
                                        }
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="modal-footer btn-accept">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat" >Aceptar</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default EditOrder;