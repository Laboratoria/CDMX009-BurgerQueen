import React from 'react';
import './style.css';

const ReusableProducts = ({ img, text, price, allStyles }) => {
    return (
        <div>
            <img src={img} height="100" width="100px" className={allStyles} />
            <p>{text}</p>
            <p>{price}</p>
        </div>
    );
}
export default ReusableProducts;

