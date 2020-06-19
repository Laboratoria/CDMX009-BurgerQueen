import React, { useState, useEffect } from 'react'

const FoodItem = ({ item, price, image }) => (
    <div class="row">
        <div class="col s12 m7 ">
            <div class="card blue ligth-1">
                <div class="card-image">
                    <img src={image} />
                </div>
                <div class="card-content">
                    <p>{item}</p>
                    <p>$ {price}.00  </p>
                </div>
            </div>
        </div>

    </div>
)

const DinnerMenu = ({ }) => {
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

export default DinnerMenu;


