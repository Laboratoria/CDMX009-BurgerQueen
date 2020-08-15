import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'

function updateDeliverOrder(id, entregado, addToast, setOpened){
  
    const db = firebase.firestore();
    if(entregado){
        console.log('entregado') 
        db.collection('orders').doc(id).update({
          'horaPago': new Date(),
          'pagado': true,
          'status': 'Pagado'
        }).then(()=>{
           console.log('orden enviada correctamente')
           addToast('La orden se ha enviado exitosamente', {
           placement:'top-center', 
           appearance: 'success' 
           })
          setOpened(false)
        }).catch(err=>{
           console.log(err);
           addToast('Hubo un error al enviar la orden', {
           placement:'top-center', 
           appearance: 'error' 
           })
        })  
        
    }else{
        console.log('Entregando')
        db.collection('orders').doc(id).update({
            'horaEntrega': new Date(),
            'entregado': true,
            'status': 'Entregado'           
        }).then(()=>{
            console.log('orden enviada correctamente')
            addToast('La orden se ha enviado exitosamente', {
              placement:'top-center', 
              appearance: 'success' 
            })
            setOpened(false)
          }).catch(err=>{
            console.log(err);
            addToast('Hubo un error al enviar la orden', {
                placement:'top-center', 
                appearance: 'error' 
              })
          })    
    }
  }

export default updateDeliverOrder;  