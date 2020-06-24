import React from 'react';

function Button(props) {
    return (
        <div>
            <button type='button' className='btnOption'>{props.name}</button>
        </div>
    )
}

export default Button;
