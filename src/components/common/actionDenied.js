function actionDenied (addToast){
    addToast('Su rol no tiene permiso para realizar esta acción.', {
      autoDismiss: true, 
      placement:'top-center', 
      appearance: 'error' 
    })
  }

  export default actionDenied;