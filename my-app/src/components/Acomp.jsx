import React from "react"
  
const Acomp =() =>{ //{handlerCounter} dentro de parentesis
    return(
        <div>
            <button  className="button is-warning" id="papas">Papas fritas </button> //onclick={handlerCounter}
            <button className="button is-warning" id="aros">Aros de cebolla</button>
        </div>
    )
}

export default Acomp