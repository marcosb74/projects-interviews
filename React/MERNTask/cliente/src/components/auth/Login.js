import React, { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/AuthContext";
const Login = (props) => {

 //extraigo los valores del conext

 const alertaContext = useContext(AlertaContext);
 const { alerta, mostrarAlerta } = alertaContext;

 const authContext = useContext(AuthContext);
 const { mensaje, autenticado, iniciarSesion } = authContext;

 // en caso de que el password o el usuario no exista
 useEffect(() => {
  if (autenticado) {
    props.history.push("/proyectos");
  }
  if (mensaje) {
    mostrarAlerta(mensaje.msg, mensaje.categoria);
  }
}, [mensaje, autenticado, props.history]);



  //state para iniciar sesion

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  // extraigo de usuario
  const { email, password } = usuario;

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // cuando el usuario quiere iniciar sesion
  const handleSubmit = (e) => {
    e.preventDefault();
    //valido que no haya campos vacios
    if(email.trim() ===""|| password.trim()===""){
      mostrarAlerta("Todos los campos son obligatorios","alerta-error");
    }
    //pasarlo al action
    iniciarSesion({email,password})
  };
  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Ingrese su email"
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Ingrese su password"
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesion"
            />
          </div>
        </form>

        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Crear Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
