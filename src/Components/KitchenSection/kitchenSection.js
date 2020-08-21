import React, {useState, useEffect} from 'react';
import { Row } from 'antd'
import Header from '../Header/Header';
import Pendings from './Pendings';
import './Kitchen.scss';
import {db} from '../../firebase';
import Order from '../Order/Order';

const KitchenSection = () =>{
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        let pendingOrders = db.collection('orders').where("status", "==", false).orderBy('fecha', 'desc');
        pendingOrders.onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setOrders(docs);
        });
    }

    useEffect(() => {
        getOrders();
    }, [])
    
    console.log(orders)
    const [ordenSeleccionada, setOrdenSeleccionada] = useState ({})

    const getSelectedOrder = (id) => {
    let getDocument = db.collection('orders').doc(id);
    getDocument.get().then((doc) => doc.exists ? setOrdenSeleccionada({...doc.data(), id: doc.id}) : console.log('no se encuentra el documento'))
    }
    

    const finishOrder = () => {
        db.collection('orders').doc(ordenSeleccionada.id).update({
            status: true,
            finish: Date.now()
        }).then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    }

    

    return(
        <Row className= 'content' justify='space-around'>
            <Header/>
            <Pendings orders={orders} getSelectedOrder={getSelectedOrder} />
            <Order ordenSeleccionada={ordenSeleccionada} finishOrder={finishOrder} />
        </Row>
    )
}

export default KitchenSection;