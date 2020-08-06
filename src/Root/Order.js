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

  function addExtras (extra){ //AQUÍ AÚN NO ME QUEDA AGREGAR EXTRA
    setOrder({
      ...order,
      extra 

    })
    console.log(order)
  }

  const showModal = () => { //MODAL
    setModalState({
      visible: true,
    });
  };

  function onChange(e) { //CHECK
    console.log({ [e.target.name]: e.target.value });
    addExtras({ [e.target.name]: e.target.value })
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
    }
    //Aquí va ventana modal sólo para hamburgesas
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

  // function substractItem (itemSubstract){
  //   console.log(order)
  //   let found = order.items.find(({ productId })=> productId === itemSubstract.productId)
  //   const newItems = order.items.filter(item => item.productId !== itemSubstract.productId)
  //   if (found){
  //     order.items.map( item => {
  //       if (itemSubstract.productId === item.productId){
  //         if (item.quantity === 1){
  //           setOrder({
  //             ...order,
  //             items: newItems,
  //             total: calculateTotal(newItems)
  //           })
  //         } else if (item.quantity >=2) {
  //           console.log('Aquí restamos cantidad')
  //           setOrder({
  //             ...order,
  //             quantity:item.quantity-1, 
  //             subTotal: itemSubstract.price*item.quantity
  //           })
  //         }
  //       }
  //     })
  //   }
  // }

  const handleOk = () => {  //MODAL
    setModalState({ loading: true });
    setTimeout(() => {
      setModalState({ loading: false, visible: false });
    }, 3000);
  };

  const handleCancel = () => {  //MODAL
    setModalState({ visible: false });
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
                // substractItem={substractItem}
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