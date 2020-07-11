import React from 'react';

const SignedInLinks = () => {
    return (
        <ul className='right'>
            <li><span className='btn btn-floating blue lighten-2 black-text'>BC</span></li>
            <li><a href='/orders'><span className="material-icons">room_service</span></a></li>
        </ul>
    )
}

export default SignedInLinks;