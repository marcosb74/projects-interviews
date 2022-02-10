import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/TareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTarea = () => {
  // Extraigo proyectos del state inicial.

  const proyectosContext = useContext(ProyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //obtengo las tareas del proyecto

  const tareasContext = useContext(TareaContext);
  const { tareasproyecto } = tareasContext;

  //si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  // array destructuring para extraer el proyecto actual:

  const [proyectoActual] = proyecto;

  //elimina un proyecto
  const handleClick = () => {
    eliminarProyecto(proyectoActual._id);
  };
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas!</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}

        <button
          type="button"
          className="btn btn-eliminar"
          onClick={handleClick}
        >
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTarea;
