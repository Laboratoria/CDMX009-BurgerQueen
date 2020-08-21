import React from 'react'
import ReactDOM from 'react-dom';

const modal = document.querySelector('#modal-root');

const Modal = ({isOpened, setOpened, setFlavor, onClickAccept}) => 
    isOpened ?
    ReactDOM.createPortal(
        <div className="modal-container" >
            <div className="modal-box">
                <div className="flavor-container">
                    <h3>Sabores</h3>
                    <div>
                        <div>
                            <input type="radio" 
                            id="res" 
                            name="flavor" 
                            value="res" 
                            defaultChecked 
                            onClick={(e)=>setFlavor({
                                id: 'f1',
                                name: e.target.value})}/>
                            <label for="res">Res</label>
                        </div>
                        <div>    
                            <input type="radio" 
                            id="pollo" 
                            name="flavor" 
                            value="pollo" 
                            onClick={(e)=>setFlavor({
                                id: 'f2',
                                name: e.target.value})}/>
                            <label for="pollo">Pollo</label>
                        </div>
                        <div>
                            <input type="radio" 
                            id="veg" 
                            name="flavor" 
                            value="vegetariana" 
                            onClick={(e)=>setFlavor({
                                id: 'f3',
                                name: e.target.value})}/>
                            <label for="veg">Vegetariana</label>        
                        </div>    
                    </div>
                </div>
                <hr/>
                <div className="extra-container">
                    <h3>Extras</h3>
                    <div>
                        <div>
                            <input type="checkbox" 
                                id="e1" 
                                className="extra" 
                                value="queso"
                                
                                />
                            <label for="e1">$1  Queso</label>
                        </div>
                        <div>
                            <input type="checkbox" 
                                id="e2" 
                                className="extra" 
                                value="huevo"
                                  
                                />
                            <label for="e2">$1  Huevo</label>
                        </div>
                    </div>
                </div>
                <hr/><br/>
                <div className="modals-btns-container">
                    <input className="active-menu-btn" 
                        type="button" 
                        value="Aceptar" 
                        onClick={()=> {setOpened(false); onClickAccept()}}/>
                    <input className="menu-nav-btn" 
                        type="button" 
                        value="Cancelar" 
                        onClick={()=> {setOpened(false); setFlavor({
                            id: 'f1',
                            name: 'res' 
                        })}}/>
                </div>    
            </div>
        </div>,
        modal
    )
    : null;


export default Modal
