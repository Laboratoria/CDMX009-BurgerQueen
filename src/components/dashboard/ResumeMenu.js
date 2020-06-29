import React from 'react';
import '../../styles/resume.css';

const ResumeMenu = (props) => {

  return (

    <div className="card medium resume-card white-text">
      <div className='container'>
        <div className='row'>
          <p className='center-align'>Resumen del pedido</p>
          {props.order.map(a => (
            <div>
              <p className='col m6'>{a.item}</p>
              <p className='col m1'>1</p>
              <p className='col m1'>${a.price}</p>
              <p className="material-icons resume-icon col m1" onClick= {() => {props.deleteOrder(a.id)} }>delete</p>
              <p className="material-icons resume-icon col m1">edit</p>
            </div>
          ))}

        </div>
          <span>Total: $ {props.totalPrice}</span>
      </div>
    </div>

    /*       <div className="card medium resume-card white-text">
          <div className='container'>
            <div className='row'>
          <p className='center-align'>Resumen del pedido</p>
    
            <div>
          <p className='col m5'>café</p>
          <p className='col m1'>1</p>
          <p className='col m1'>10</p>
          <p className="material-icons col m1">delete</p>
          <p className="material-icons col m1">edit</p> 
          </div>
                 
    
          </div>
          </div>
        </div> */
  )
}


export default ResumeMenu;


/*
<tbody>
                {props.desayunos.map(desayuno => (
                    <tr key={desayuno.id}>
                        <td>{desayuno.item}</td>
                        <td>${desayuno.price}</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button" onClick={() => {props.deleteMenu(desayuno.id, desayuno.item)}}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody> */