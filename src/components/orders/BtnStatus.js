import React, { Fragment } from 'react';
import pendingIcon from './images/pending.svg';
/* import cancelIcon from './images/cancel.svg';
import readyIcon from './images/ready.svg'; */
import './orders.css'

function BtnStatus() {
    return (
        <Fragment>
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">status</a>
            <div className='row resume-status'>
                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Status</h4>
                        <form action="#">
                            <p>
                                <label>
                                    <input name="group1" type="radio" checked />
                                    <span>pendiente</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span>completado</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span>cancelado</span>
                                </label>
                            </p>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default BtnStatus