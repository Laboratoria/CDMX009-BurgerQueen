import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'

function updateKitchenOrder(id, preparando, employee, addToast, setOpened){
    console.log(id, preparando)
    const db = firebase.firestore();
    if(preparando){
       console.log('preparando') 
       let orderNotDone = 0;
       document.querySelectorAll('.orderDone').forEach((e)=>{
            if(e.checked === false){
                orderNotDone ++
            }
        })
        console.log(orderNotDone);
        if(orderNotDone !== 0){
            addToast('Aún faltan platillos por preparar', {
                autoDismiss: true,
                placement:'top-center', 
                appearance: 'warning' 
              })
        }else{
            
            db.collection('orders').doc(id).update({
                'horaListo': new Date(),
                'preparando': false,
                'listo': true,
                'entregado':false, 
                'pagado': false,
                'status': 'Por entregar'
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
    }else{
        console.log('iniciando preparacion')
        db.collection('orders').doc(id).update({
            'horaPreparacion': new Date(),
            'preparando': true,
            'status': 'Preparando',
            'cocinero': employee 
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

  export default updateKitchenOrder;