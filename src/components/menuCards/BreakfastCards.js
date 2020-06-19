import React, { useState, useEffect } from 'react';

const FoodItem = ({ item, price, image }) => ( //maquetación de los elementos sin los datos reales
    <div className='menu-list section row'>
        <div className='col s6'>
            <div className='card yellow'>
                <div class="card-image">
                    <img src={image} />
                </div>
                <div className='card-content'>
                    <p>{item}</p>
                    <p>$ {price}.00  </p>
                </div>
            </div>
        </div>

    </div>
)

const BreakfastMenu = ({ }) => {
    const [desayunos, setDesayunos] = useState([]);

    useEffect(() => {
        const breakfastMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/desayunos'
        fetch(breakfastMenuUrl)
            .then(res => res.json())//esto es el resultado de fetch y se convierto en JSON
            .then(data => {
                setDesayunos(data.desayunos);
            })
    }, []);

    return (
        <div>
            <ul>
                {desayunos.map((d) => (
                    <FoodItem key={d.id} item={d.item} price={d.price} image={d.image} />
                ))}
            </ul>
        </div >
    );
};

export default BreakfastMenu;