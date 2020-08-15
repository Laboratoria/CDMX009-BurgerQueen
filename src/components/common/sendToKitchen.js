import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'

const sendToKitchen = (addToast,employee, client, setClient, tab, setTab, total2, products, setProducts) => {
  
    const date = new Date();
    let id = employee+'_'+tab+'_'+date.getTime();
    const db = firebase.firestore(); 
    const fetchData = async () => {
      
      const count = await db.collection('counter').doc('counter').get()
      const NunOrder = count.data().ordersCount + 1;
  
      await db.collection('counter').doc('counter').update({
        'ordersCount': NunOrder
      })
      
      await db.collection('orders').doc(id).set({
          'id': id,
          'mesero': employee,
          'cocinero': '',
          'cliente': client, 
          'mesa': tab,
          'total': total2,
          'horaPedido': date,
          'horaPreparacion': '',
          'horaEntrega': '',
          'status': 'Por preparar',
          'preparando': false,
          'listo' : false,
          'entregado': false,
          'numOrden': NunOrder, 
          'orden':{}
      })
    }
  
    fetchData().then(()=>{
      products.map((product, index) =>{
        db.collection('orders').doc(id).update({
          ['orden.producto_'+index]:{
            'id': product.id,
            'name': product.name,
            'number': product.number,
            'price': product.price,
            'uPrice': product.uPrice
          }
        })
      })
    }).then(()=>{
      console.log('orden enviada correctamente')
      addToast('La orden se ha enviado exitosamente', {
        placement:'top-center', 
        appearance: 'success' 
      })
      setProducts([]);
      setTab('');
      setClient('');
    }).catch(err=>{
      console.log(err);
      addToast('Hubo un error al enviar la orden', {
        placement:'top-center', 
        appearance: 'error' 
      })
    })
  }

  export default sendToKitchen;