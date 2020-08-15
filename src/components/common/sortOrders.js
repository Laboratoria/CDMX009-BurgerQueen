
function sortOrders(array){
    let arrayData = array.map(w => w.data());
    return arrayData.sort((a, b)=> a.numOrden - b.numOrden);
  }

export default sortOrders;  