import React, { useState, useEffect } from 'react'

const FoodItem = ({ item, price, image, setOrder }) => (
    <div className='menu-list section'>
        <div className='col m6'>
            <div className='card general' onClick={() => { setOrder({ item, price }) }}>
                <div className="card-image row ">
                    <img src={image} className='col m6 img-icon' alt='food-img' />
                </div>
                <div className='card-content white-text center-align'>
                    <p className='' name='item'>{item}</p>
                    <p name='price'>$ {price}.00  </p>
                </div>
            </div>
        </div>
    </div>
)

const DinnerCards = ({ setOrder }) => {
    const [comidas, setDinner] = useState([]);

    useEffect(() => {
        const dinnerMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/comidas';
        fetch(dinnerMenuUrl)
            .then(res => res.json())
            .then(data => {
                setDinner(data.comidas);
            })
    }, []);

    return (
        <div>
            <ul>
                {comidas.map((optionMenu) => (
                    <FoodItem key={optionMenu.id} item={optionMenu.item} price={optionMenu.price} image={optionMenu.image} setOrder={setOrder} />
                ))}
            </ul>
        </div >
    );
};

export default DinnerCards;


