import React from 'react';
import img from '../../assets/images/burgerDoble.png'


export default function Card({name, image, price, onClick}) {
      
    return (
      <div className="card-container" onClick={onClick}>
        <p>
           {name} 
        </p>
        <img src={image} alt=""/>
        <p>
           ${price}
        </p>
      </div>
    );
  }
  