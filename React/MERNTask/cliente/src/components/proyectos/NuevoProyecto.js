import React, { Fragment, useContext, useState } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // obtengo el state del formulario.

  const proyectosContext = useContext(ProyectoContext);
  const {
    formulario,
    errorForm,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  //state para el proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const handleChange = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };
  // extraigo el nombre del proyecto

  const { nombre } = proyecto;

  // Submit del form

  const handleSubmit = (e) => {
    e.preventDefault();

    // valido
    if (nombre === "") {
      mostrarError();
      return;
    }
    // agrego all state
    agregarProyecto(proyecto);
    // reinicio el form
    setProyecto({
      nombre: "",
    });
  };
  // mostrar el formulario
  const handleClickForm = () => {
    mostrarFormulario();
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={handleClickForm}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto " onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={handleChange}
            value={nombre}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {errorForm ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
