import React from "react"
  
const Acomp =({handlerCounter}) =>{
    return(
        <div>
            <button onclick={handlerCounter} className="button is-warning" id="papas">Papas fritas </button>
            <button className="button is-warning" id="aros">Aros de cebolla</button>
        </div>
    )
}

export default Acomp