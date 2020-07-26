import React, { Fragment } from 'react';

const SignedInLinks = () => {
    return (
        <Fragment>
            <ul className='right'>
                <li><span className='btn btn-floating blue lighten-2 black-text'>BC</span></li>
                <li><a href='/kitchen'><span className="material-icons">room_service</span></a></li>
            </ul>
        </Fragment>
    );
};

export default SignedInLinks;