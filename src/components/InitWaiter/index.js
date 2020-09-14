import React from 'react';
import Logo from '../Logo/Logo';
import db from '../../firebase';
import Select from 'react-select';
import Boton from '../Boton/Boton';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import ImgTable from '../../assets/imgs/Table.png';
import ImgWaiter from '../../assets/imgs/waiter.png';
import Lunch from '../../assets/imgs/burger-lunch.jpg';
import ImgUtensils from '../../assets/imgs/Trastes.jpg';
import ImgCostumer from '../../assets/imgs/Costumer.png';
import Breakfast from '../../assets/imgs/coffe-break.png';

const options = [
  { label: 'Lupita S.', value: 'Lupita S.' },
  { label: 'Azucena V.', value: 'Azucena V.' },
  { label: 'Lalo M.', value: 'Lalo M.' },
  { label: 'Gilberto M.', value: 'Gilberto M.' }
]

const InitWaiters = ({ client, setClient, setNumorder }) => {

  const handleInputsClient = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  }

  const handleOrder = (e) => {
    e.preventDefault();
    db.collection('orders').add(client)
    .then(() => {
      console.log('orden de initwaiter guardada en Firestore exitosamente');
      return db.collection('ordersfood').get()
  })
  .then((snapshot) => {
      console.log('Generando No. Orden');
      setNumorder(snapshot.size + 1)
  })
  }

  return (

    <div>
      <div className={styles.headerInitWaiter}>
        <Logo nameClass={"logoSmallInitWaiter"} />
        <div className={styles.reg_date}>
          <Link to="waiterregister">
          <Boton text={"Registros"} allstyles={"buttonGoRgWaiter "} />
          </Link>
          <DateTime />
        </div>
      </div>

      <div className={styles.initWaiter}>
        <div>
          <div className={styles.dataWaiter}>
            <img src={ImgWaiter} className={styles.imgWaiter} alt="" />
            <Select
              options={options}
              className={styles.nameWaiter}
              name="namewaiter"
              placeholder="Seleccione su Nombre"
              onChange={(option) => setClient({ ...client, namewaiter: option.value })}              
            />
          </div>

          <div className={styles.dataCostumer}>
            <img src={ImgCostumer} className={styles.imgCostumer} alt="" />
            <div className={styles.dataUtensils}>
              <img src={ImgUtensils} className={styles.imgUtensils} alt="" />
              <input
                type="text"
                placeholder="Ingrese Nombre del Cliente"
                className={styles.nameCostumer}
                name="nameclient"
                onChange={handleInputsClient} />
            </div>
          </div>

          <div className={styles.dataTable}>
            <img src={ImgTable} className={styles.imgTable} alt="" />
            <div className={styles.dataTableLabel}>
              <div className={styles.numberTable} >
                <p> No. Mesa </p>
                <label htmlFor="">
                  <input
                    type="text"
                    placeholder="No."
                    className={styles.numberTableData}
                    name="numtable"
                    onChange={handleInputsClient} />
                </label>
              </div>
            </div>

            <div className={styles.numberPeople}>
              <p>No. Personas</p>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="No."
                  className={styles.numberPeopleData}
                  name="numpeople"
                  onChange={handleInputsClient} />
              </label>
            </div>
          </div>
          <div className={styles.footerWaiter}>

            <Link to="/login">
              <Boton text={"Salir"} allstyles={"buttonOutWaiter"} />
            </Link>

            <button onClick={handleOrder} className={styles.SaveInformation}>Guardar Datos</button>

          </div>
        </div>

        <div className={styles.containerFood}>

          <Link to="/breakfast" className={styles.lineLinks}>
            <div className={styles.bgFoodBreak}>
              <img src={Breakfast} alt="" className={styles.imageFood} />
              <p className={styles.titleMenu}>Desayunos</p>
            </div>
          </Link>

          <Link to="/restday" className={styles.lineLinks}>
            <div className={styles.bgFoodLunch}>
              <img src={Lunch} alt="" className={styles.imageFood} />
              <p className={styles.titleMenu}>Comidas y Cenas</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InitWaiters;