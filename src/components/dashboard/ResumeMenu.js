import React from 'react';
import './resume.css';

const ResumeMenu = ({ addOrder, datos, deleteOrder }) => {
  let data = datos.productos;

  return (
    <div>
      <div className="resume-card white-text scroll">
        <div className='container'>
          <div className='row'>
            <div className='prueba'>
              <p className='center-align resume-title'>Resumen del pedido</p>
              <div className="divider yellow lighten-2"></div>
            </div>
            {
              data.length === 0 ? (<p className='center-align products-order'>No hay productos en la orden</p>
              ) : (
                  data.map((a, index) => (
                    <div className='order-info' key={index}>
                      <p className='col m7'>{a.item}</p>
                      <div>
                        <button type='button' onClick={() => addOrder(a, a.quantity + 1)}>+</button>
                        <p className='col m1'>{a.quantity}</p>
                        <button type='button' onClick={() => addOrder(a, a.quantity - 1)}>-</button>

                      </div>
                      <p className='col m1'>${a.price}</p>
                      <p className="material-icons resume-icon col m2 right" onClick={() => { deleteOrder(a.id); }}>delete</p></div>
                  )))
            }
          </div>
        </div>
      </div>
      <div className='card total'>
        <div>
          <span className='total-price white-text'>TOTAL: $ {datos.total}</span>
        </div></div>
    </div>
  );
};

export default ResumeMenu;
