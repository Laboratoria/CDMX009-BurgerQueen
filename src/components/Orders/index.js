import React, { useEffect, useState } from "react";
import menucocina from "../assets/img/01-menu-cocina.svg";
import Boton from "../utils/Buton";
import Navbar from "../Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import { db } from "../../firebase";

const Orders = ({ dateAndTime }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await db.collection("orders").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setOrders(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <Container>
      <Navbar />
      <Row className="d-flex justify-content-center">
        <Boton image={menucocina} adress="/orders" />
        <p>Fecha y hora: {dateAndTime}</p>
      </Row>
      <div>Aqui van las Órdenes</div>

      {orders.map((order) => (
        <div className="order-container" key={order.id}>
          <p>{order.waiterName}</p>
          <div className="order-items-container">
            {order.items.map((item, index) => (
              <li key={`order-item-${index}`}>
                {/* {order.placedAt} */}
                {item.quantity}
                {item.productName}
              </li>
            ))}
          </div>
          <p>${order.total}</p>
        </div>
      ))}
    </Container>
  );
};

export default Orders;
