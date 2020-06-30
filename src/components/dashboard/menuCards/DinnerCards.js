import React, { useState, useEffect } from 'react'

const FoodItem = ({ item, price, image }) => (
    <div className='content-cards'>
        <div className="row">
            <div className="col m6 general">
                <div className="my-card" >
                    <div className="card-img info-product">
                        <img src={image} />
                    </div>
                    <div className="card-content info-product">
                        <p>{item}</p>
                        <p>$ {price}.00  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const DinnerCards = ({ }) => {
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
                    <FoodItem key={optionMenu.id} item={optionMenu.item} price={optionMenu.price} image={optionMenu.image} />
                ))}
            </ul>
        </div >
    );
};

export default DinnerCards;


