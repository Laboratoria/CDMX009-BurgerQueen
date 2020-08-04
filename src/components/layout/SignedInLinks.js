import React, { Fragment } from 'react';

const SignedInLinks = () => {
    return (
        <Fragment>
            <ul className='right'>
                <li className='icn'><a href='/kitchen'><span className="material-icons">room_service</span></a></li>
            </ul>
        </Fragment>
    );
};

export default SignedInLinks;