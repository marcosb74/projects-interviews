import React, { useContext, useState, useEffect } from "react";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const FormTarea = () => {
  // Extraigo si un proyecto esta activo del state inicial.

  const proyectosContext = useContext(ProyectoContext);
  const { proyecto } = proyectosContext;
  //obtengo la funcion del context de tareas

  const tareasContext = useContext(TareaContext);
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = tareasContext;

  //Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      setTarea(tareaseleccionada);
    } else {
      setTarea({ nombre: "" });
    }
  }, [tareaseleccionada]);

  //state del formulario

  const [tarea, setTarea] = useState({
    nombre: "",
  });
  //extraigo el nombre del proyecto

  const { nombre } = tarea;
  //si no hay proyecto seleccionado
  if (!proyecto) return null;

  // array destructuring para extraer el proyecto actual:

  const [proyectoActual] = proyecto;
  //leo los valores del form

  const handleChange = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //Reviso si edito o es nueva tarea

    if (tareaseleccionada === null) {
      //agrego una nueva tarea al state
      tarea.proyecto = proyectoActual._id;

      agregarTarea(tarea);
    } else {
      //actualizo la tarea existente
      actualizarTarea(tarea);

      //elimina tarea seleccionada
      limpiarTarea();
    }

    //Obtengo y fultro las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);
    // reinicio el form
    setTarea({
      nombre: "",
    });
  };
  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Ingrese el nombre de la tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio!</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
