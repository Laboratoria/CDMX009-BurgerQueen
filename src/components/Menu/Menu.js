import React, { Fragment, useState } from 'react';
import './menu.css'
import product from '../../data/products';

const Menu = ({addProduct,addItemToOrder, order}) => {

    // console.log(order)

    // const[order, setOrder]=useState([]);

    // function addOrder (){
    //     return setOrder({
    //         id: 1,
    //         items: foods,
    //         tableNumber:4,
    //         status: "inKitchen",
    //         total:150
    //     })
    // }

// console.log(()=>addOrder())

    // const DeleteFood = id => {
    //     const order = ordered.filter(elem => elem.id !== id)
    //     // SelectProduct(order.id);
    //     console.log(id)
    // }


    // const [Data, setData] = useState ({
    //     quantityFood: parseFloat(quantity),
    //     total: parseFloat(price)*quantity,
    //     id: id
    // })

    // const {quantityFood, total, idFood}=Data;


    // const UpdateChangeOfState = e => {
    //     const {total} = e.target;
    //     console.log(total)
    // }

    // const ChangeQuantityProduct = e => {
    //     e.preventDefault();
    //     console.log(Data)
    // }

    return (
        <div>
            {
                product.map((elem)=>(
                    <img
                    key= {elem.id}
                    className='ImgsProducts'
                    alt= {elem.name}
                    src= {elem.img}
                     onClick={() =>{
                        //   addProduct(elem.id)
                          addItemToOrder(elem.id)
                        }}/>
                ))
            } 
        </div>
    )
}
export default Menu;
