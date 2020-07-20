import React from "react"
  
const Cafe =({ addOrderItems}) =>{
    return(
        <div>
            <button className="button is-warning" id="cafeAm" onClick={()=>addOrderItems("algo")}>Cafe Americano</button>
            <button className="button is-warning" id="cafeLe">Cafe con Leche</button>
        </div>
    )
}

export default Cafe