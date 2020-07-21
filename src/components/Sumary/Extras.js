import React from 'react';
import ReactDOM from 'react-dom';

const Extras = ({ onClose, order, setOrder, idItem }) => {

    const saveChecks = (e) => {
        console.log(idItem);
        //console.log(e);
        //Aditamento(chicken,meat,egg,etc)
        let addittion = e.target.value
        //Devuelve true si el checkbox está seleccionado
        let targetChecked = e.target.checked
        //let check = document.querySelector(`#${addittion}`).checked

        //Encontrando el índice del item en el state order
        const indexItem = order.items.findIndex(elem => elem.idItem === idItem)
        console.log(indexItem);
        //Accediendo a la propiedad addittions del item
        let newAddittion = [...order.items]
        //Se hace una copia de addittions del item con el index que tiene en el array de order.items y se agrega la nueva addittion
        newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: [...order.items[indexItem].addittions, addittion] }

        //Condición en caso de que se haya checkeado casilla y es dif de egg y chesse
        if (targetChecked && addittion !== 'egg' && addittion !== 'chesse') {
            console.log(addittion);
            setOrder({ ...order, items: newAddittion })
            return

            //Condición en caso de que se haya checkeado casilla y es igual a egg o chesse
        } if (targetChecked && addittion === 'egg' || targetChecked && addittion === 'chesse') {
            console.log(addittion);
            let newAddittion = [...order.items]
            //Se hace una copia de los aditamentos en addittions: y se agrega el nuevo aditamento
            newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: [...order.items[indexItem].addittions, addittion], price: order.items[indexItem].price + 1 }
            setOrder({ ...order, items: newAddittion })
            return

            //Condición en caso de que se haya quitado el check de casilla y es dif a egg o chesse
        } if (targetChecked !== true && addittion !== 'egg' && addittion !== 'chesse') {
            console.log(targetChecked);
            console.log(addittion);

            //Accedemos a los addittions del item con su index
            const productaddittion = order.items.map(product => product.addittions)[indexItem]
            console.log(productaddittion);
            //Extraemos un array sin el aditamento
            const extras = productaddittion.filter(product => product !== addittion)
            console.log(extras);

            //Nos ubicamos en addittions del item para posterior actualizar el state con el nuevo array
            let newAddittion = [...order.items]
            newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: extras }
            setOrder({ ...order, items: newAddittion })
            return

        }
        //Condición en caso de que se haya quitado el check de casilla y es igual a egg o chesse
        if (targetChecked !== true && addittion === 'egg' || targetChecked !== true && addittion === 'chesse') {
            console.log(targetChecked);
            console.log(addittion);
            //Precio de producto con aditamento huevo o queso
            const priceProductaddittion = order.items.map(product => product.price)[indexItem]
            console.log(priceProductaddittion);
            //Accedemos a los addittions del item con su index
            const productaddittion = order.items.map(product => product.addittions)[indexItem]
            console.log(productaddittion);
            //Extraemos un array sin el aditamento
            const extras = productaddittion.filter(product => product !== addittion)
            console.log(extras);

            //Nos ubicamos en addittions del item para posterior actualizar el state con el nuevo array
            let newAddittion = [...order.items]
            //newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: extras, price: priceProductaddittion - 1 }
            newAddittion[indexItem] = { ...newAddittion[indexItem], addittions: extras, price: order.items[indexItem].price - 1 }
            setOrder({ ...order, items: newAddittion })
            return
            //Accedemos a los addittions del item con su index
            /*  let arrAddittions = [...order.items]
             arrAddittions[indexItem] = [...arrAddittions[indexItem].addittions]
             console.log(arrAddittions);
             //Sacamos un nuevo array sin el elem que quitamos del check
             const extras = arrAddittions[indexItem].filter(product => product !== addittion)
             console.log(extras); */
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
    //1er param: que queremos renderizar, 2do: donde queremos que se renderice
    return ReactDOM.createPortal(node, document.querySelector('#modalAdditions'))
}

export default Extras
