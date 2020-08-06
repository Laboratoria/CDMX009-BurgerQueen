import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Meseros from "./Meseros";
import { db } from "./firebase";

const Cocina = () => {
  const [count, setCount] = useState([]);

  const getOrders = async () => {
    await db
      .collection("orders")
      .get()
      .then((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((comanda) => {
          docs.push({ ...comanda.data(), id: comanda.id });
        });
        setCount(docs);
      });
  };

  useEffect(() => {
    getOrders();
    //console.log(getOrders);
  }, []);

  console.log(count);

  const components = count.map((order) => {
    return (
      <Fragment key={order.id}>
        {" "}
        <p>{order.cliente}</p>
        <p>{order.nroMesa}</p>
        <p>{order.platillos.map((platillo, idx) => (
            <span key={`${order.id}-${platillo.nameProduct}-${idx}`}>
                {platillo.nameProduct}
            </span>
        ))}</p>
      </Fragment>
    );
  });

//   const OrdersComponentes = ({ count }) => (
//     <div>
//       {count.map((a) => (
//         <table>
//           <tr>
//             <td>{a.cliente}</td>
//             <td>{a.numesa}</td>
//             <td>{a.order}</td>
//           </tr>
//         </table>
//       ))}
//     </div>
//   );

  //   const components = count.map ((orders,index) => (
  //     <OrdersComponentes count={count} key={`orders-${index}`} cliente={orders.cliente} numesa={orders.nroMesa} order={orders.platillos} />

  //     )
  //   )

  return (
    <Fragment>
      <h1>hola mundo</h1>
      {components}
    </Fragment>
  );
};

export default Cocina;
