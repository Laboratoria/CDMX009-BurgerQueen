import React from 'react';

const Breakfast = (props) => {
    const menu = props.food;
    function saveOrder(id){
        const newOrder = menu.filter(item => item.id === id)
        console.log(newOrder);
    }
      

    return (
        <div>
            { menu.map(elem => (
                <div key ={elem.id}>
                    <img src={elem.img} alt={elem.name} onClick={() => saveOrder(elem.id)} />
                </div>
            ))}
        </div>
    )
}

export default Breakfast;