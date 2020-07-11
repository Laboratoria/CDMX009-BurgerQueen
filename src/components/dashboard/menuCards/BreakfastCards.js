import React, { useState, useEffect } from 'react';
import './menuCards.css'

const FoodItem = ({ item, id, price, addOrder }) => ( 
    <div className='col m6 space'>
        <div className='card general' onClick={() => { addOrder({ item, price }) }}>
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
)

const BreakfastMenu = ({ addOrder }) => {

    const [desayunos, setDesayunos] = useState([]);

    useEffect(() => {
        const breakfastMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/desayunos'
        fetch(breakfastMenuUrl)
            .then(res => res.json())
            .then(data => {
                setDesayunos(data.desayunos);
            })
    }, []
    );

    return (

        <div className='scroll-cards'>
            <ul>
                {desayunos.map((desayuno) => (
                    <FoodItem
                        key={desayuno.id}
                        id={desayuno.id}
                        item={desayuno.item}
                        price={desayuno.price}
                        image={desayuno.image}
                        addOrder={addOrder}
                    />
                ))}
            </ul>
        </div >
    );
};

export default BreakfastMenu;