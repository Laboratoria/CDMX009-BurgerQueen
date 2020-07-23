import React from 'react';
import ReactDOM from 'react-dom';

const Extras = ({ onClose, order, setOrder, idItem }) => {

    const saveChecks = (e) => {
        console.log(idItem);

        //Additions(chicken,meat,egg,etc)
        let addittion = e.target.value
        //Return true if checkbox is selected
        let targetChecked = e.target.checked
        //let check = document.querySelector(`#${addittion}`).checked

        //Found itme´s index in state order
        const indexItem = order.items.findIndex(elem => elem.idItem === idItem)
        console.log(indexItem);
        //Access to property addittions of item
        let newAddittion = [...order.items]
        //We do a copy of addittions of item with its index in the array order.items and add the new addition
        newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: [...order.items[indexItem].addittions, addittion] }

        //Condition if check = true and if is different of egg and chesse
        if (targetChecked && addittion !== 'egg' && addittion !== 'chesse') {
            console.log(addittion);
            setOrder({ ...order, items: newAddittion })
            return

            //Condition if check = true and if is equal of egg and chesse
        } if (targetChecked && addittion === 'egg' || targetChecked && addittion === 'chesse') {
            console.log(addittion);
            let newAddittion = [...order.items]
            //We do a copy of additions in addittions: and add the new addition
            newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: [...order.items[indexItem].addittions, addittion], price: order.items[indexItem].price + 1 }
            setOrder({ ...order, items: newAddittion })
            return

            //Condition in case of let´s move check and is different to egg or chesse
        } if (targetChecked !== true && addittion !== 'egg' && addittion !== 'chesse') {
            console.log(targetChecked);
            console.log(addittion);

            //Access to addittions of item with its index
            const productaddittion = order.items.map(product => product.addittions)[indexItem]

            //We extract an array within addition
            const extras = productaddittion.filter(product => product !== addittion)

            //We are located in addittions of item to update the state with the new array
            let newAddittion = [...order.items]
            newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: extras }
            setOrder({ ...order, items: newAddittion })
            return

        }
        //Condition in case of let´s move check and is equal to egg or chesse
        if (targetChecked !== true && addittion === 'egg' || targetChecked !== true && addittion === 'chesse') {
            console.log(targetChecked);
            console.log(addittion);
            //Price of product with addition egg or cheese
            const priceProductaddittion = order.items.map(product => product.price)[indexItem]
            console.log(priceProductaddittion);
            //Access to addittions of item with its index
            const productaddittion = order.items.map(product => product.addittions)[indexItem]
            console.log(productaddittion);
            //We extract an array within addition
            const extras = productaddittion.filter(product => product !== addittion)
            console.log(extras);

            //We are located in addittions of item to update the state with new array
            let newAddittion = [...order.items]
            //newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: extras, price: priceProductaddittion - 1 }
            newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: extras, price: order.items[indexItem].price - 1 }
            setOrder({ ...order, items: newAddittion })
            return

        }
    }



    const node = (
        <div className="modal-container">
            <div className="modal-box">
                <a><i className="fas fa-times icon-close"
                    onClick={onClose}></i></a>
                <h1>Extras:</h1>
                <div className="cheks">
                    <input
                        data-testid="chicken"
                        id="chicken"
                        type="checkbox"
                        value="chicken"
                        onChange={saveChecks}
                    />
                    <label>Pollo</label>
                    <input
                        id='meat'
                        type="checkbox"
                        value="meat"
                        onChange={saveChecks}
                    />
                    <label>Carne</label>
                    <input
                        id='vegy'
                        type="checkbox"
                        value="vegy"
                        onChange={saveChecks}
                    />
                    <label>Vegetariana</label>
                    <input
                        id='egg'
                        type="checkbox"
                        value="egg"
                        onChange={saveChecks}
                    />
                    <label>Huevo</label>
                    <input
                        id='chesse'
                        type="checkbox"
                        value="chesse"
                        onChange={saveChecks}
                    />
                    <label>Queso</label>
                    <input
                        id='noMayonnaise'
                        type="checkbox"
                        value="noMayonnaise"
                        onChange={saveChecks}
                    />
                    <label>Sin Mayonesa</label>
                    <input
                        id="noMustard"
                        type="checkbox"
                        value="noMustard"
                        onChange={saveChecks}
                    />
                    <label>Sin Mostaza</label>
                </div>
                <div className="container-btn-accept">
                    <button
                        type="button"
                        className="btn-accept"
                        onClick={onClose}
                    >Aceptar</button>
                </div>

            </div>
        </div>

    )
    //1er param: what we want render, 2do: where we want it render
    return ReactDOM.createPortal(node, document.querySelector('#modalAdditions'))
}

export default Extras
