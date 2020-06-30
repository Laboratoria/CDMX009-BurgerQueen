import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const FoodItem = ({ item, price, image }) => (

    <div className='content-cards'>
        <div className="row">
            <div className="col m3 general">
                <div className="my-card" >
                    <div className="card-img info-product">
                        <img src={image} alt='food' />
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
            {desayunos.map((d) => (
                <FoodItem key={d.id} item={d.item} price={d.price} image={d.image} />
            ))}

        </div >
    );
};

export default BreakfastMenu;