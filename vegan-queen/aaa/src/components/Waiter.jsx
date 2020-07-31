/* import React from "react"; */
import Boton from "../components/Boton";
import exit from "../img/salir.svg";
import mc from "../img/m-c.svg";
import menumesero from "../img/01-menu-mesero.svg";
import React, { useState } from "react";

//Yazzz estas aqui???

const Waiter = () => {
const [name, setName] = useState('name');
const [time,setTime] = useState (() => {
  const dt = new Date().toLocaleString()
  return dt
}); 
  return (
    <div>
      <Boton image={exit} adress="/" />
      <div>
        <Boton image={mc} adress="/Role" />
      </div>
      <div>
          <p> { time }</p>
      </div>
      <div>
        <Boton image={menumesero} />
      </div>
      <div>
      <input 
       type ="name"
       placeholder ="name"
       onChange={e => setName(e.target.value)} />
      {/*  value = {name}  debe retornar el nombre  */}
       <div>
       <button  type = "image"
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_M89SuIvsQ-4fSUojfXClKalxp-pf_vNbw&usqp=CAU"
        onClick={e => {
          e.preventDefault()
       console.log(name); 
        }}
            ></button>
        </div>
        </div>
     {/*  <div>
        <Boton
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_M89SuIvsQ-4fSUojfXClKalxp-pf_vNbw&usqp=CAU"
           adress="/Menu"
           />
      </div> */}
    </div>
  );
};

export default Waiter;
