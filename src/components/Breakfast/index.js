import React, { Fragment, useState } from "react";
import Boton from "../utils/Buton";
import mbreakfast from "../assets/img/02-menu-desayuno.svg";
import ItemProductCatalog from "../utils/ItemProductCatalog";
import Navbar from "../Navbar";
import styles from "./style.module.css";
import Modal from "react-modal";
import Order from "../Order/Order.js";
import { db } from "../../firebase";
import InfoClients from "../utils/InfoClients";
import InfoTotal from "../utils/InfoTotal";

import ShowWaiterName from "../utils/ShowWaiterName";
import ShowName from "../utils/ShowName";

Modal.setAppElement("#root");

const calcTotal = (order) =>
  order.items.reduce((sum, item) => sum + item.subtotal, 0);

const Breakfast = ({
  Data,
  order,
  addingProductToOrder,
  deletingProductToOrder,
  setOrder,
  reset,
}) => {
  const total = calcTotal(order);
  console.log("calculando total", total);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userName, setUserName] = useState();
  const [waiterName, setWaiterName] = useState();

  const sendOrder = async () => {
    try {
      await db
        .collection("orders")
        .doc()
        .set({
          ...order,
          placedAt: new Date(),
          total,
          /*  waiterName,
          userName, */
        });
      console.log("ya se envío data a firebase D:");
      reset();
      setModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  /* const resetOrder = () => {
    setModalIsOpen(false);
    setOrder([]);
  }; */

  /* Cómo le paso el total? */

  return (
    <Fragment>
      <Navbar />
      <div className={styles.logoUp}>
        <Boton image={mbreakfast} adress="/menu-breakfast" />
      </div>

      <InfoClients setUserName={setUserName} setWaiterName />

      <section className={styles.container}>
        {Data.map((product) => (
          <ItemProductCatalog
            key={product.id}
            product={product}
            order={order}
            setOrder={setOrder}
            addingProductToOrder={addingProductToOrder}
            deletingProductToOrder={deletingProductToOrder}
          />
        ))}
      </section>
      <InfoTotal total={total} />
      <div className={styles.contentButtonNext}>
        <button
          className={styles.buttonNext}
          onClick={() => setModalIsOpen(true)}
        >
          Confirmar orden
        </button>
      </div>
      <div className={styles.modalContainer}>
        <Modal className={styles.Modal} isOpen={modalIsOpen}>
          <div>
            <ShowWaiterName waiterName={waiterName} />
            <ShowName userName={userName} />
            <Order order={order} />
          </div>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.buttonNext}
              onClick={() => setModalIsOpen(false)}
            >
              Cancelar
            </button>

            {/* Este botón tendría que enviar a firebase */}
            <button
              className={styles.buttonNext}
              onClick={() => {
                sendOrder();
              }}
            >
              Enviar a Cocina
            </button>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default Breakfast;
