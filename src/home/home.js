import React, { useState, useEffect } from 'react'

const FoodItem = ({ item, price, image }) => (
    <li>{item} - {price} <img src={image}></img></li>
)

const Food = ({ }) => {
    const [desayunos, setDesayunos] = useState([]);

    useEffect(() => {
        const desayunoMenuUrl = 'https://v2-api.sheety.co/08037a6e719e10abd51ee7fe17bba593/burgerQueenMenu/desayunos'
        fetch(desayunoMenuUrl)
            .then(res => res.json())
            .then(data => {
                //setDesayunos(data.desayunos);
                setDesayunos(data.desayunos.map((d) => ({
                    ...d,
                    image: d.image.replace(/"/ig, ''),
                })));
            })
    }, []);

    return (
        <div>
            <ul>
                {desayunos.map((d) => (
                    <FoodItem key={d.item} item={d.item} price={d.price} image={d.image} />
                ))}
            </ul>
        </div >
    );
};

export default Food;


