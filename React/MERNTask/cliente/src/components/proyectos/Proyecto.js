import React, { useContext } from "react";

import ProyectoContext from "../../context/proyectos/proyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const Proyecto = ({ proyecto }) => {
  //obtengo el state de proyectos
  const proyectosContext = useContext(ProyectoContext);
  const { proyectoActual } = proyectosContext;

  //obtengo la funcion del context de tareas

  const tareasContext = useContext(TareaContext);
  const { obtenerTareas } = tareasContext;

  // funcion para agregar el proyecto actual

  const seleccionarProyecto = (id) => {
    proyectoActual(id); //fijar un proyecto actual;
    obtenerTareas(id); // filtrar las tareas cuando hago click
  };
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto._id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
