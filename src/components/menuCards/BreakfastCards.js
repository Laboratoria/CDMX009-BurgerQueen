import React, { useState, useEffect } from 'react';

const FoodItem = ({ item, price, image, setOrder }) => ( //maquetación de los elementos sin los datos reales
    
    <div className='menu-list section'>
        <div className='col m6'>
            <div className='card yellow' onClick={() => {setOrder([{item, price, image}])}}>
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

const BreakfastMenu = ({ setOrder }) => {

    const [desayunos, setDesayunos] = useState([]);

    useEffect(() => {
        const breakfastMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/desayunos'
        fetch(breakfastMenuUrl)
            .then(res => res.json())//esto es el resultado de fetch y se convierto en JSON
            .then(data => {
                setDesayunos(data.desayunos);
                console.log('data desayunos', data.desayunos)
            })
    }, []
    );

    return (
        
        <div>
            <ul>
                {desayunos.map((d) => (
                    <FoodItem key={d.id} item={d.item} price={d.price} image={d.image} setOrder={setOrder}/>
                ))}
            </ul>
        </div >
    );
};

export default BreakfastMenu;