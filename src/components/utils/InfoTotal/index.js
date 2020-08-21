import React, { Fragment } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const InfoTotal = ({ total }) => {
  return (
    <Fragment>
      <div className={styles.containerTotal}>
        <div className={styles.iconProduct}>
          <Link to="/menu">
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              className={styles.iconProduct}
            />
          </Link>
        </div>
        <div className={styles.totalData}>
          <div>
            {/* <Order 
                        Total={total}
                        /> */}
            <p>Total:${total}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoTotal;
