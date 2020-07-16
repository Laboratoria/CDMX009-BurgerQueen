import React from 'react';
import Logo from '../Logo/Logo';
import Table from 'react-bootstrap/Table';
import DateTime from '../DateTime/DateTime';

import styles from './styles.module.css';
import './styles.css';




const TableWaiter = ({ client, order }) => {

  return ( 
    <div>
        <div className={styles.headerWrapper}>
            <div className={styles.logoBreakFast}>
                <Logo nameClass={"logoSmallLunch"} />
             </div>
             <div className={styles.titleBreakfast}>
                <h2>Registro de Ordenes</h2>
                <h3>Mesero</h3>
            </div>
            <div className={styles.iconHeader}>
                <span className={styles.iconWaiterBreakFast}></span>
            </div>
        </div>

        <div className={styles.table}>
        <Table striped bordered hover className={styles.tableLines}>
            <thead>
                <tr className={styles.columns}>
                    <th scope="col"> No. <br/> Orden </th>
                    <th scope="col"> Fecha </th>
                    <th scope="col"> No. <br/>  Mesa </th>
                    <th scope="col"> No. <br/> Personas </th>
                    <th scope="col"> Hora <br/> Entrada </th>
                    <th scope="col"> Hora <br/> Salida </th>
                    <th scope="col"> Status </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> {order} </td>
                    <td> <DateTime /> </td>
                    <td> {client.numtable} </td>
                    <td> {client.numpeople} </td>
                    <td>12:30</td>
                    <td>14:00</td>
                    <td>PAGADA</td>
                </tr>
                <tr>
                    <td>124</td>
                    <td>{Date}</td>
                    <td>5</td>
                    <td>4</td>
                    <td>12:30</td>
                    <td>14:00</td>
                    <td>PAGADA</td>
                </tr>
                <tr>
                    <td>125</td>
                    <td>{Date}</td>
                    <td>5</td>
                    <td>4</td>
                    <td>12:30</td>
                    <td>14:00</td>
                    <td>PAGADA</td>
                </tr>
                <tr>
                    <td>126</td>
                    <td>{Date}</td>
                    <td>5</td>
                    <td>4</td>
                    <td>12:30</td>
                    <td>14:00</td>
                    <td>PAGADA</td>
                </tr>
                <tr>
                    <td>127</td>
                    <td>{Date}</td>
                    <td>5</td>
                    <td>4</td>
                    <td>12:30</td>
                    <td>14:00</td>
                    <td>PAGADA</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>{Date}</td>
                    <td>5</td>
                    <td>4</td>
                    <td>12:30</td>
                    <td>14:00</td>
                    <td>PAGADA</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>{Date}</td>
                    <td>5</td>
                    <td>4</td>
                    <td>12:30</td>
                    <td>14:00</td>
                    <td>PAGADA</td>
                </tr>
                



            </tbody>
        </Table>
        </div>

        
    </div>
    );
}
 
export default TableWaiter;