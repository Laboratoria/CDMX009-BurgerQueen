import React from 'react';

function ButtonMenu(props) {
    return (
        <div>
            <button type='button' className='btnOption' >{props.name}</button>
        </div>
    )
}

export default ButtonMenu;
