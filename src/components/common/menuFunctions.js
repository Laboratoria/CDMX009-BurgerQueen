
export const calcTotal = (products) => products.reduce((sum, curr) => sum + curr.price, 0);

export function addProduct(cardItem, products, setProducts){
  // el item ya esta
    if (products.find((i) => i.id === cardItem.id)) {
    const newProducts = products.map((newItem) => {
    if (cardItem.id === newItem.id ) {
        return {
        ...newItem,
        number: newItem.number + 1,
        price: newItem.price + newItem.uPrice
        }
    }
    return newItem;
    })
    setProducts(newProducts)

    } else { // hay q agregar al item
        setProducts((products) => [...products, {
        id: cardItem.id,
        name: `${cardItem.name}`,
        number: 1,
        price: cardItem.price,
        uPrice: cardItem.price
        }])
    }
}

export function subtractProduct(orderItem,  products, setProducts){
  
  if(orderItem.number > 1){
    const newProducts = products.map((newItem) => {
      if (orderItem.id === newItem.id) {
        return {
          ...newItem,
          number: newItem.number - 1,
          price: newItem.price - newItem.uPrice
        }
      }
     return newItem;
    })
    setProducts(newProducts)
  }else{
    let newProducts = products.map((newItem) => newItem)
    newProducts = newProducts.filter(e => e.id !== orderItem.id)
    setProducts(newProducts)
  }
}

export function compareProduct(cardItem, setOpened, setBurger, products, setProducts){
  if(cardItem.id === 'h1' || cardItem.id === 'h2'){
    setOpened(true);
    setBurger(cardItem);
  }else{
    addProduct(cardItem, products, setProducts)
  }
} 

export function addBurger(burger, flavor, setFlavor, products, setProducts ){
  let cardItem = {
    id: burger.id+flavor.id,
    name: `${burger.name} ${flavor.name}`,
    price: burger.price
  }

  let extras =[];
  document.querySelectorAll('.extra').forEach((e)=>{
    if(e.checked){
    let extra = {
      id: e.id,
      name: e.value,
      uPrice: 1 
    }
    extras.push(extra)
    }  
 })

  if(extras.length !== 0){
    for(let i in extras){
      cardItem = {
        id: cardItem.id+extras[i].id,
        name: `${cardItem.name} | ${extras[i].name}`,
        price: cardItem.price + extras[i].uPrice 
      }
    }
  }
  
  setFlavor({
    id: 'f1',
    name: 'res' 
  });

  addProduct(cardItem, products, setProducts);
}