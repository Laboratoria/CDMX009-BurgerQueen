import React, { useState, useEffect } from 'react'

const FoodItem = ({ item, id, price, addOrder }) => (
    <div className='col m6'>
        <div className='card general' onClick={() => { addOrder({ item, price }) }}>
            <div className="card-image row food-image">
                <img src={`/img/products/${id}.png`} className='col m6 img-icon item' alt='food-img' />
            </div>
            <div className='food-name'>
                <p className='info' name='item'>{item}</p>
                <p className='info' name='price'>$ {price}.00  </p>
            </div>
        </div>
    </div>
)

const DinnerCards = ({ addOrder }) => {
    const [comidas, setDinner] = useState([]);

    useEffect(() => {
        let dinnerMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/comidas';
        fetch(dinnerMenuUrl)
            .then(res => res.json())
            .then(data => {
                setDinner(data.comidas);
            })
    }, []);

    return (

        <div>
            <ul>
                {comidas.map((comida) => (
                    <FoodItem
                        key={comida.id}
                        id={comida.id}
                        item={comida.item}
                        price={comida.price}
                        image={comida.image}
                        addOrder={addOrder}
                    />
                ))}
            </ul>
        </div >
    );
};

export default DinnerCards;

