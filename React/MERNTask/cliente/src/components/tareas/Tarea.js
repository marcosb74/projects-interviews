import React, { useContext } from "react";
import TareaContext from "../../context/tareas/TareaContext";
import ProyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({ tarea }) => {
  // Extraigo si un proyecto esta activo del state inicial.
  console.log(tarea);

  const proyectosContext = useContext(ProyectoContext);
  const { proyecto } = proyectosContext;
  //obtengo la funcion del context de tareas

  const tareasContext = useContext(TareaContext);
  const { actualizarTarea, eliminatTarea, obtenerTareas, guardarTareaActual } =
    tareasContext;

  //extraigo el proyecto

  const [proyectoActual] = proyecto;
  //funcion que se ejecuta cuando el usuario presiona btn eliminat tarea

  const tareaEliminar = (id) => {
    eliminatTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual._id);
  };

  // funcion que modifica el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    actualizarTarea(tarea);
  };
  // agrega una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
