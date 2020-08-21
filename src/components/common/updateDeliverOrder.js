import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'

function updateDeliverOrder(id, entregado, addToast, setOpened){
  
    const db = firebase.firestore();
    return db.collection('orders').doc(id).update({
      ...entregado ? { 
        'horaPago': new Date(),
        'pagado': true, 
        'status': 'Pagado' 
      } : {
        'horaEntrega': new Date(),
        'entregado': true,
        'status': 'Entregado'
      }          
    }).then(()=> {
       addToast('La orden se ha enviado exitosamente', {
         placement:'top-center', 
         appearance: 'success' 
       })
      setOpened(false)
    }).catch(err=> 
       addToast('Hubo un error al enviar la orden', {
         placement:'top-center', 
         appearance: 'error' 
       })
    )
  }

export default updateDeliverOrder;  