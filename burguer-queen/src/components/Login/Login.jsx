import React from "react"
import RegisterUser from "../RegisterUser/RegisterUser"
import queen from "../../imgs/queen.svg"
import "./login.css"

const Login = () => {
  return (
    <div className="text-center lgn">
      <div className="text-center">
        <img src={queen} className="img-fluid mt-5 " id="imgSize" alt="..." />
      </div>

      <RegisterUser />
    </div>
  )
}

export default Login
