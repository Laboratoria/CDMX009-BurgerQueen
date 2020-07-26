import React, { useState, useEffect } from 'react';
import './menuCards.css';

const FoodItem = ({ item, id, price, quantity, addOrder }) => (
    <div className='col m6 space'>
        <div className='card general' onClick={() => { addOrder({ item, price, id, quantity }); }}>
            <div className="card-image row food-image">
                <img src={`/img/products/${id}.png`} className='col m6 img-icon item' alt='food-img' />
            </div>
            <div className='card-content white-text center-align'>
                <div>
                    <p className='info' name='item'>{item}</p>
                    <p className='info' name='price'>$ {price}.00  </p>
                </div>
            </div>
        </div>
    </div>
);

export function useBreakfast() {
    const [breakfast, setBreakfast] = useState([]);

    useEffect(() => {
        const breakfastMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/desayunos';
        fetch(breakfastMenuUrl)
            .then(res => res.json())
            .then(data => {
                setBreakfast(data.desayunos);
            });
    }, []
    );
    return breakfast;
}


const BreakfastMenu = ({ addOrder }) => {

    const breakfast = useBreakfast();

    return (

        <div className='scroll-cards'>
            <ul>
                <li>
                    {breakfast.map((breakfastOrder) => (
                        <FoodItem
                            key={breakfastOrder.id}
                            id={breakfastOrder.id}
                            item={breakfastOrder.item}
                            price={breakfastOrder.price}
                            image={breakfastOrder.image}
                            quantity='1'
                            addOrder={addOrder}
                        />
                    ))}
                </li>
            </ul>
        </div >
    );
};
export default BreakfastMenu;