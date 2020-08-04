import React from "react"
import {useForm} from "react-hook-form";






const AddUserForm = () => {
    const {register, errors, handleSubmit}= useForm();

    const onSubmit = (data, e) => {
    console.log(data)

    /*props.addUser(data)*/
    e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <button className="button">Enviar a cocina</button>
                    <div  id="nameUser">
                        <p className="control has-icons-left has-icons-right">
                        <input id="cliente"className="input is-info is-warning" name="name" type="text" placeholder="Nombre cliente" ref={
                            register({
                                required:{value:true, message:"campo requerido"}
                            })
                        } />
                        <span>
                            {errors?.name?.message}
                        </span>
                        
                        </p>
                    </div>
                    <div  id="numberUser">
                        <p className="control has-icons-left has-icons-right">
                        <input id="mesa" name="num" className="input is-info is-warning"  type="number" placeholder="Numero de mesa" ref={
                            register({
                                required:{value:true, message:"campo requerido"}
                            })
                        } />
                        <span>
                            {errors?.num?.message}
                        </span>
                        </p>
                        </div>
                        
                        </form>
    );
}

export default AddUserForm;