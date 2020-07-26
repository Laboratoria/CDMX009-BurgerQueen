import React, { Fragment } from 'react';
import './resume.css';

const ResumeMenu = ({ addOrder, data, deleteOrder }) => {
  let allProducts = data.productos;

  return (
    <Fragment>
      <div className="resume-card white-text scroll">
        <div className='container'>
          <div className='row'>
            <div className='prueba'>
              <p className='center-align resume-title'>Resumen del pedido</p>
              <div className="divider yellow lighten-2"></div>
            </div>
            {
              allProducts.length === 0 ? (<p className='center-align products-order'>No hay productos en la orden</p>
              ) : (
                  allProducts.map((a, index) => (
                    <div className='order-info' key={index}>
                      <p className='col m7'>{a.item}</p>
                      <div className='red'>
                        <div className='col m1'>
                          <span className="material-icons btn-quantity" onClick={() => addOrder(a, a.quantity + 1)}>add</span>
                        </div>
                        <div className='col m1'>
                          <p>{a.quantity}</p>
                        </div>
                        <div className=' col m1'>
                          {
                            a.quantity > 1 ? (
                              <span className="material-icons btn-quantity" onClick={() => addOrder(a, a.quantity - 1)}>remove</span>
                            ) : null
                          }
                        </div>
                      </div>
                      <p className='col m1'>${a.price}</p>
                      <p className="material-icons resume-icon col m1 right delete-btn" onClick={() => { deleteOrder(a.id); }}>delete</p>
                    </div>
                  )))
            }
          </div>
        </div>
      </div>
      <div className='card total'>
        <div>
          <span className='total-price white-text'>TOTAL: $ {data.total}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ResumeMenu;
