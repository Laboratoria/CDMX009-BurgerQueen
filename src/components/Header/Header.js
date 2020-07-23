import React, { useState } from 'react';
import Modal from '../Kitchen/Modal/Modal';
import { Link } from "react-router-dom";

const Header = () => {
    const [listModal, updateModal] = useState(false);
    const showModal = (m) => {
        if (m === 'm') {
            updateModal(true);
            return
        }
        updateModal(false)
    }
    return (
        <header className="header-kitchen">
            <div className='div-header1' >
                <Link to="/">
                    <h1 className='title-header'>

                        Burguer Queen
                </h1>
                </Link>
            </div>
            <div className='div-header2' >

                <i className="fa fa-bell"
                    onClick={() => showModal('m')}
                > </i>

                {listModal
                    ?
                    (<Modal
                        onClose={() => updateModal(false)}
                    />)
                    : null
                }
            </div>
        </header>
    )
}
export default Header; 
