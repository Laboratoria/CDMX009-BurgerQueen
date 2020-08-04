import React, { useState, useEffect } from 'react';
import './menuCards.css';

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
                    {breakfast.map((food) => (
                        <div className='col m6 space'>
                            <div className='card general' onClick={() => { addOrder(food); }}>
                                <div className="card-image row food-image">
                                    <img src={`/img/products/${food.id}.png`} className='col m6 img-icon item' alt='food-img' />
                                </div>
                                <div className='card-content white-text center-align'>
                                    <div>
                                        <p className='info' name='item'>{food.item}</p>
                                        <p className='info' name='price'>$ {food.price}.00  </p>
                                    </div>
                                </div>
                            </div>
                        </div >
                    ))}
                </li>
            </ul>
        </div >
    );
};
export default BreakfastMenu;