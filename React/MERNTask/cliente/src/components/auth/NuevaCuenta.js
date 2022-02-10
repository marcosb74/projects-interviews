import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/AuthContext";
const NuevaCuenta = (props) => {
  //extraigo los valores del conext

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  //En caso de que el usuario se haya autenticado o registrado

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
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  // extraigo de usuario
  const { nombre, email, password, confirmar } = usuario;

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // cuando el usuario quiere iniciar sesion
  const handleSubmit = (e) => {
    e.preventDefault();
    //valido que no haya campos vacios
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    // password minimo de 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "El password debe tener al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }
    // validar que el password sea igual
    if (password !== confirmar) {
      mostrarAlerta("Los passwords no son iguales", "alerta-error");
      return;
    }
    //pasalo al action
    registrarUsuario({
      nombre,
      email,
      password,
    });
  };
  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Crear una Cuenta</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Ingrese su Nombre"
              onChange={handleChange}
            />
          </div>

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
            <label htmlFor="confirmar">Confirme su Password:</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={confirmar}
              placeholder="Reingrese su Password"
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarse"
            />
          </div>
        </form>

        <Link to={"/"} className="enlace-cuenta">
          Volver al Login
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
