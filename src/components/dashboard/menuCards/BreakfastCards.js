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
    const [desayunos, setDesayunos] = useState([]);

    useEffect(() => {
        const breakfastMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/desayunos';
        fetch(breakfastMenuUrl)
            .then(res => res.json())
            .then(data => {
                setDesayunos(data.desayunos);
            });
    }, []
    );
    return desayunos;
}


const BreakfastMenu = ({ addOrder }) => {

    const desayunos = useBreakfast();

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
                        quantity='1'
                        addOrder={addOrder}
                    />
                ))}
            </ul>
        </div >
    );
};

export default BreakfastMenu;

/* const BreakfastMenu = ({ addOrder }) => {

    const [desayunos, setDesayunos] = useState([]);

    useEffect(() => {
        const breakfastMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/desayunos'
        fetch(breakfastMenuUrl)
            .then(res => res.json())
            .then(data => {
                setDesayunos(data.desayunos);
                //console.log(data.desayunos)
            })
    }, []
    );

    return (

        <div className='scroll-cards'>
            <ul>
                <li>
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
                </li>
            </ul>
        </div >
    );
};

export default BreakfastMenu; */