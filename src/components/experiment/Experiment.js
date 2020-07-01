import React, { Fragment, useState } from 'react';

const Experiment = ({food, ordered, addProduct, foods}) => {
    
    const {name, img, id, price, quantity} = food;

    const SelectProduct = id => {
        const product = foods.filter(elem => elem.id === id)
        addProduct([
            ...ordered,
            product[0],
        ]);
    }

    const DeleteFood = id => {
        const order = ordered.filter(elem => elem.id !== id)
        // SelectProduct(order.id);
        console.log(id)
    }

    // const [Counter, SetCounter] = useState(quantity);


    const [Data, setData] = useState ({
        quantityFood: parseFloat(quantity),
        total: parseFloat(price)*quantityFood,
        id: id
    })

    const UpdateState = e => {
        setData ({
            ...Data,
            [e.target.name]: e.target.value 
        })
    }

    const {quantityFood, totalFood, idFood}=Data;

    const ChangeQuantityProduct = e => {
        e.preventDefault();
        console.log(Data)
    }

    return (
        <div>
            { foods
                ?
                    (
                        <img alt= {name} src= {img} onClick={() => SelectProduct(id)}/>
                    )
                : 
                    (
                        <Fragment>
                            <form onSubmit={ChangeQuantityProduct}>
                                <div>
                                <input 
                                    type="number" 
                                    name="quantityFood"  
                                    style={{width: '50px', height: '30px'}}
                                    onChange={UpdateState}
                                    value={quantityFood}
                                />
                                <input 
                                    type="hidden" 
                                    name="total" 
                                    style={{width: '50px'}}
                                    onChange={UpdateState}
                                    value={totalFood}
                                />
                                <input 
                                    type="hidden" 
                                    name="idFood" 
                                    style={{width: '50px'}}
                                    onChange={UpdateState}
                                    value={idFood}
                                />
                                </div>
                                <p>{name}</p>
                                <p>{price}</p>
                                <button 
                                onClick={() => DeleteFood(id)}
                                >Eliminar</button>
                            </form>
                        </Fragment>
                    )
                }
        </div>
    )
}
export default Experiment;
