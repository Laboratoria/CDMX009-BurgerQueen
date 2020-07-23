import React, { useState, useEffect } from 'react';
import Kitchen from './Kitchen';
import DeliveredOrder from './DeliveredOrder';
import { db } from '../../../firebase/firebase-config';

const GeneralKitchen = () => {

  const [order, listOrder] = useState([]);
  const [deliveredOrder, saveDeliveryOrder] = useState([]);

  useEffect(() => {
    const d = db.collection('orders').where('state', '==', 'pending');
    return d.onSnapshot(snapshot => {
      const spellsData = []
      snapshot.forEach(doc => spellsData.push({ ...doc.data(), id: doc.id }));
      listOrder(spellsData);
    });
  }, []);

  return (
    <div className='container'>
      <div className='container-kitchen'>
        {order.map((orders) => (
          <Kitchen
            key={orders.id}
            orders={orders}
            order={order}
            deliveredOrder={deliveredOrder}
            saveDeliveryOrder={saveDeliveryOrder}
            listOrder={listOrder}
          />
        )
        )
        }
      </div>


      <DeliveredOrder
        deliveredOrder={deliveredOrder}
        saveDeliveryOrder={saveDeliveryOrder}
      />
    </div>

  );
}

export default GeneralKitchen;