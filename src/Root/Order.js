import React, { useState } from 'react';
import Menu from '../components/Menu/Menu'
import products from '../data/products';
import PreviewOrder from '../components/PreviewOrder/PreviewOrder'
import './order.css'
import { Modal, Button, Checkbox } from 'antd';

function Order(){

  let [order, setOrder] = useState({
    total:0,
    items:[],
    status:false,
    tableNumber:""
  });

  let[productExtra,setProductExtra]=useState()

  let[extra,setExtra]=useState({
    quesillo:false,
    huevo:false,
  })

  function resetOrder(){
    setOrder({
      total:0,
      items:[],
      status:false,
      tableNumber:""
    }
    )
  }

  let [modalState, setModalState] = useState ({ //MODAL
    loading: false,
    visible: false,
  })

  function addExtras (extra){
    if(extra==="Quesillo"){
      setExtra({...extra,quesillo:true})
    }else if(extra==="Huevo"){
      setExtra({...extra,huevo:true})
    }
  }

  function reloadExtra(extraTemporal){
    return extraTemporal
  }

  const showModal = () => { //MODAL
    setModalState({
      visible: true,
    });
  };

  function onChange(e) { //CHECK
    addExtras( e.target.value )
  }

  function setTableNumber (tableNumber) {
    setOrder({
      ...order,
      tableNumber
    })
  }

  function addItemToOrder (product){
    if (product.extra === true){
      showModal()
      setProductExtra(product)
    }else if(product.extra === false){
      let found = order.items.find(({ productId })=> productId === product.id)
    setOrder({
      ...order,
      items: found ?
      order.items.map(
        item=>(
          item.productId === product.id ? {...item, quantity:item.quantity+1, subTotal: product.price*item.quantity } 
          :item
        )
      )
      : 
      order.items.concat({ productId:product.id, subTotal:product.price, quantity:1, nameProduct:product.name, typeProduct:product.type, price:product.price })
    })
    }
  }

  function calculateTotal (items = []) {
    return items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  }

  function deleteItem (deleteItemId) {
    const newItems = order.items.filter(item => item.productId !== deleteItemId)

    setOrder({
      ...order,
      items: newItems,
      total: calculateTotal(newItems)
    })
  }

  const handleOk = () => {  //MODAL
    setModalState({ loading: true });
    setTimeout(() => {
      setModalState({ loading: false, visible: false });
    }, 3000);
    
    let newObject={
      productId:productExtra.id,
      subTotal:productExtra.price,
      quantity:1,
      nameProduct:productExtra.name,
      typeProduct:productExtra.type,
      price: productExtra.price,
      extra:reloadExtra(extra)
    }
    setOrder({
      ...order,
      items:order.items.concat(newObject)
    })
    setProductExtra()
    setExtra({
      quesillo:false,
      huevo:false,
    })
  };

  const handleCancel = () => {  //MODAL
    setModalState({ visible: false });
    setProductExtra()
  };

      
    return (
        <div className= "principalContainer">
              <Menu
                addItemToOrder={addItemToOrder}
                products={products}
              />
            <div className= "containerOrder">
              <PreviewOrder
                setTableNumber= {setTableNumber}
                order= {order}
                deleteItem={deleteItem}
                resetOrder={resetOrder}
              />
              <Modal
                visible={modalState.visible}
                title="Extras"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Return
                  </Button>,
                  <Button key="submit" type="primary" loading={modalState.loading} onClick={handleOk}>
                    Submit
                  </Button>,
                ]}
                >
                <Checkbox onChange={onChange} name="extra" value="Quesillo">Quesillo</Checkbox>
                <Checkbox onChange={onChange} name="extra" value="Huevo">Huevo</Checkbox>
                <Checkbox onChange={onChange} name="extra" value={false}>Ninguno</Checkbox>
              </Modal>
            </div>
        </div>
    )
}

export default Order;