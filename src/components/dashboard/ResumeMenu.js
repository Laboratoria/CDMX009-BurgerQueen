import React from 'react';
import './resume.css';

const ResumeMenu = ( {datos} ) => {
  let data = datos.productos;
  console.log(data, 'data resume')

  return (
    <div>

    <div className="resume-card white-text scroll">
      <div className='container'>
        <div className='row'>
          <p className='center-align resume-title'>Resumen del pedido</p>
          <div className="divider yellow lighten-2"></div>
           {data.map(a => (
            <div>
              <p className='col m6'>{a.item}</p>
              <p className='col m1'>1</p>
              <p className='col m1'>${a.price}</p>
              <p className="material-icons resume-icon col m1" onClick= {() => {data.deleteOrder(a.id)} }>delete</p>
              <p className="material-icons resume-icon col m1">edit</p>
            </div>
          ))} 

        </div>
      </div>
    </div>
            <div className='card total'>
            <div>
             <span className='total-price white-text'>TOTAL: $ {props.totalPrice}</span>
             </div></div>
    </div>
  )
}


export default ResumeMenu;
