import React from "react";
import styles from "../Breakfast/style.module.css";

const ItemToOrder = ({ product }) => {
  return (
    <>
      <ul className={styles.list}>
        <li> | {product.quantity}</li>
        <li> | {product.productName}</li>
        <li> | Subtotal: ${product.subtotal} </li>
      </ul>
    </>
  );
};

export default ItemToOrder;
