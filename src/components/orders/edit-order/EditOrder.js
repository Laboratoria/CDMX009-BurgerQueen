import React, { Fragment, useState } from 'react';
import './edit-order.css';
import { useBreakfast } from '../../dashboard/menuCards/BreakfastCards';
import { useDinner } from '../../dashboard/menuCards/DinnerCards';

function EditOrder({ orderSelected }) {

    const desayunos = useBreakfast();
    const dinner = useDinner();

    const [finalOrder, setFinalOrder] = useState({
        order: [],
        payment: '',
        total: '',
    });

    const [newAdditionToOrder, setNewAdditionToOrder] = useState({
        productos: [],
        total: orderSelected.total,
    });

    const allItemsOrdered = () => {
        const previousOrder = orderSelected.order;
        const currentOder = newAdditionToOrder.productos;
        const nuevaOrden = previousOrder.concat(currentOder);
        setFinalOrder({
            ...finalOrder, order: [...finalOrder.order, nuevaOrden]
        });

        /*      const db = firebase.firestore();
             db
                 .collection('orders')
                 .doc(orderSelected.id)
                 .update({
                     order: finalOrder.order,
                     total: orderSelected.total,
                 });*/
    };


    //console.log('esto es finalOrder', finalOrder);

    const newProduct = newAdditionToOrder.productos;

    const calculateTotal = (items = []) => items
        .reduce((acc, item) => console.log(acc, item) || (acc + item.price * item.quantity), 0);

    const addNewProduct = (product, quantity = 1) => {
        if (newAdditionToOrder.productos.find(item => item.id === product.id)) {
            const productos = newAdditionToOrder.productos
                .map((item) => item.id === product.id ? { ...item, quantity } : item);
            setNewAdditionToOrder({
                ...newAdditionToOrder,
                productos,
                total: calculateTotal(productos)
            });
        } else {
            const productos = [...newAdditionToOrder.productos, { ...product, quantity }];
            setNewAdditionToOrder({
                ...newAdditionToOrder,
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
                <div className="modal-content mod-content-edit">
                    <div className='add-products-order'>
                        <table className='table-new-items-added'>
                            <thead>
                                <tr>
                                    <th>Productos ordenados</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderSelected.order.map((item) => (

                                    <tr>
                                        <td>
                                            <div className='product-added'>
                                                <button type='button' className='btn-delete-item-added'>X</button>
                                                <p className='item-text-table'>{item.item}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{item.quantity} </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='add-products-order'>
                        <table className='table-new-items-added'>
                            <thead>
                                <tr>
                                    <th>Productos Agregados</th>
                                    <th>Cant.</th>
                                    <th>Precio total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newProduct.map((item) => (
                                        <tr>
                                            <td>
                                                <div className='product-added'>
                                                    <button type='button' className='btn-delete-item-added'>X</button>
                                                    <p className='item-text-table'>{item.item}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='quanity-product'>
                                                    <button type='button' onClick={() => addNewProduct(item, item.quantity + 1)} className='btn-add'>+</button>
                                                    <p>{item.quantity}</p>
                                                    <button type='button' onClick={() => addNewProduct(item, item.quantity - 1)} className='btn-add'>-</button>
                                                </div>
                                            </td>
                                            <td>
                                                <p>${item.price * item.quantity}.00</p>
                                            </td>
                                        </tr>

                                    )
                                    )}
                            </tbody>
                            <tfoot>
                                <tr className='resume-items-added'>
                                    <td >Total</td>
                                    <td>{newAdditionToOrder.productos.length}</td>
                                    <td>${newAdditionToOrder.total}.00 </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className='add-products-order'>
                        <table className='table-new-items-added'>
                            <tr>
                                <th>Desayunos</th>
                                <th>Comidas</th>
                            </tr>
                            <tr>
                                <td className='row-food-opts'>
                                    {
                                        desayunos.map((desayuno) => (
                                            <div>
                                                <tr>
                                                    <p key={desayuno.id} className='item-text-table' onClick={() => { addNewProduct(desayuno); }}>{desayuno.item}</p>
                                                </tr>
                                            </div>
                                        ))
                                    }
                                </td>
                                <td>
                                    {dinner.map((comida) => (
                                        <div>
                                            <tr>
                                                <p key={comida.id} className='item-text-table' onClick={() => { addNewProduct(comida); }}>{comida.item}</p>
                                            </tr>
                                        </div>
                                    ))
                                    }
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='btn-accept-edit'>
                    <button className='btn-accept'>
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={allItemsOrdered}>Aceptar</a>
                    </button>
                </div>
            </div>
        </Fragment >
    );
};
export default EditOrder;
