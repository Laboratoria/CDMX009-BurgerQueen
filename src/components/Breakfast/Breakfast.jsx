import React from 'react';

const Breakfast = (props) => {
    const menu = props.food;
    const cards = menu.map(elem =>(
        <div>
            <img src={elem.img} alt={elem.name}/>
        </div>
    ));

    return (
        <div>
            {cards}
        </div>
    )
}

export default Breakfast;