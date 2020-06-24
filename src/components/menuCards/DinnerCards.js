import React, { useState, useEffect } from 'react';

const FoodItem = ({ item, price, image }) => ( //Maquetación de los elementos sin los datos reales
    <div className='menu-list section'>
        <div className='col m6'>
            <div className='card yellow'>
                <div className="card-image row">
                    <img src={image} className='col m6' alt='food-img'/>
                </div>
                <div className='card-content'>
                    <p className='center-align'>{item}</p>
                    <p>$ {price}.00  </p>
                </div>
            </div>
        </div>

    </div>
)

const DinnerMenu = ({ }) => {
    const [comidas, setComida] = useState([]);

    useEffect(() => {
        const dinnerMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/comidas'
        fetch(dinnerMenuUrl)
            .then(res => res.json())//esto es el resultado de fetch y se convierto en JSON
            .then(data => {
                setComida(data.comidas);
                console.log('data comida', data.comidas)
            })
    }, []);

    return (
        <div>
            <ul>
                {comidas.map((d) => (
                    <FoodItem key={d.id} item={d.item} price={d.price} image={d.image} />
                ))}
            </ul>
        </div >
    );
};

export default DinnerMenu;