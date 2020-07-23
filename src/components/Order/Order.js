import React, { Fragment, useState } from 'react';
import { saveOrderBD } from '../../firebase/firebase-config'
import { Link, BrowserRouter } from "react-router-dom";

import Summary from '../Sumary/Summary.js'
import Breakfast from '../Breakfasts/Breakfast.js'
import Lunch from '../Lunch/Lunch.js'
import ControlTotal from '../ControlTotal/ControlTotal.js'
import Modal from '../Kitchen/Modal/Modal';
import Extras from '../Sumary/Extras.js'
import './Order.scss';

const Order = ({ saveOrders, orders, breakfasts, lunchs, order, setOrder }) => {

    //Show error in case the fields are not completed (selects,name)
    const [error, setError] = useState(false)
    //Destructuring state order
    const { waiter, client, table, items, totalProducts, total } = order

    //Start tru the first time that the application start, and show breakfast menu
    const [showMenu, setMenu] = useState(true)
    const [listModal, updateModal] = useState(false);


    //Func that change state showMenu in click 
    const changeMenu = (e) => {
        let btnLunch = document.querySelector('#btnLunch')
        let btnBreakfast = document.querySelector('#btnBreakfast')
        if (e.target.name === 'lunch') {
            btnBreakfast.classList.add('btn-no-select')
            btnBreakfast.classList.remove('btn-select')
            btnLunch.classList.add('btn-select')
            btnLunch.classList.remove('btn-no-select')
            setMenu(false)
            return
        }
        setMenu(true)
        btnLunch.classList.add('btn-no-select')
        btnLunch.classList.remove('btn-select')
        btnBreakfast.classList.add('btn-select')
        btnBreakfast.classList.remove('btn-no-select')
    }

    //Read elements and put in state
    const updateStateOrder = (e) => {
        //update state
        setOrder({
            //copy of state
            ...order,
            [e.target.name]: e.target.value
        });

    }


    const formValidation = () => {
        if (waiter === "" || client === "" || table === "") {
            setError(true)
            return
        }
        setError(false)
        order.date = new Date()

        saveOrderBD(order)

        //Clean inputs
        setOrder({
            waiter: "",
            client: "",
            table: "",
            items: [],
            totalProducts: 0,
            total: 0,
            state: "pending"
        })

    }

    const cancelOrder = () => {
        setOrder({
            waiter: "",
            client: "",
            table: "",
            items: [],
            totalProducts: 0,
            total: 0,
            state: "pending"
        })
    }


    const showModal = (m) => {
        if (m === 'm') {
            updateModal(true);
            return
        }
        updateModal(false)
    }

    return (
        // <BrowserRouter>
        <Fragment>

            <header className="header-order">
                <select
                    name="waiter"
                    id="waiter"
                    value={waiter}
                    onChange={updateStateOrder}>
                    <option value="">Mesero</option>
                    <option value="Juan">Juan</option>
                    <option value="Alicia">Alicia</option>
                    <option value="Moises">Moises</option>
                </select>
                <Link to="/">
                    <p>Burguer Queen</p>
                </Link>

                <i className="fa fa-bell"
                    onClick={() => showModal('m')}
                ></i>
            </header>



            <div className="container-view">

                {/* input client´s name */}
                <div className="container-client">
                    <input
                        type="text"
                        name="client"
                        placeholder="Nombre Cliente"
                        onChange={updateStateOrder}
                        value={client}
                    ></input>
                </div>

                {/* Select tables */}
                <div className="container-tables-summary">
                    <div className="container-tables">
                        <select
                            name="table"
                            id="table"
                            value={table}
                            onChange={updateStateOrder}>
                            <option value="mesa">Mesa</option>
                            <option value="1">Mesa 1</option>
                            <option value="2">Mesa 2</option>
                            <option value="3">Mesa 3</option>
                            <option value="4">Mesa 4</option>
                            <option value="5">Mesa 5</option>
                            <option value="6">Mesa 6</option>
                            <option value="7">Mesa 7</option>
                            <option value="8">Mesa 8</option>
                            <option value="9">Mesa 9</option>
                            <option value="10">Mesa 10</option>
                        </select>
                    </div>
                    <div className="title-summary">
                        <p>Resumen:</p>
                    </div>
                </div>

                {/* Btns kind of menu */}
                <div className="container-btns-title">
                    <div className="container-btns-menu">
                        <button
                            id="btnBreakfast"
                            name="breakfast"
                            type="button"
                            className="btn-breakfast"
                            onClick={changeMenu}
                        >Desayuno</button>
                        <button
                            id="btnLunch"
                            name="lunch"
                            type="button"
                            className="btn-lunch"
                            onClick={changeMenu}
                        >Comida</button>
                    </div>

                    {/* Titles table summary */}
                    <div className="container-titles-summary">
                        <div className="title-summary title-dish"><p>Platillo</p></div>
                        <div className="title-summary"><p>Cantidad</p></div>
                        <div className="title-summary"><p>Precio</p></div>
                        <div className="title-summary title-empty"><p></p></div>
                    </div>
                </div>

                {/* Container Menu */}
                {/* if, that show the menu depends the click */}
                <div className="container-order">
                    <div className="container-menu ">
                        {showMenu ? (
                            <Breakfast
                                breakfasts={breakfasts}
                                order={order}
                                setOrder={setOrder}
                            />
                        ) :
                            (
                                <Lunch
                                    lunchs={lunchs}
                                    order={order}
                                    setOrder={setOrder}
                                />
                            )}
                    </div>

                    <Summary
                        lunchs={lunchs}
                        breakfasts={breakfasts}
                        order={order}
                        setOrder={setOrder} />
                </div>


                {/* Show error if the form is empty when click send the kitchen */}
                {error ? <p className="error-form">Todos los campos son obligatorios</p> : null}


                {/* Show total of products, total price, and btns to send to the kitchen */}
                <ControlTotal
                    order={order}
                    setOrder={setOrder} />

                <div className="container-btns-total">
                    <button
                        type="button"
                        className="btn-send-kitchen"
                        onClick={formValidation}
                    >Enviar Cocina</button>
                    <button
                        type="button"
                        className="btn-cancel-order"
                        onClick={cancelOrder}
                    >Cancelar orden</button>
                </div>

                {listModal
                    ?
                    (<Modal
                        onClose={() => updateModal(false)}
                    />)
                    : null
                }
                {/* container-view-->*/} </div>
        </Fragment >

    )
}

export default Order