import React, { useReducer } from "react";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";
import clienteAxios from "../../config/axios";
const TareaState = (props) => {
  const initialState = {
    tareasproyecto: [],
    errortarea: false,
    tareaseleccionada: null,
  };

  //Creo el dispatch y el state

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //crear las funciones

  //obtengo las tareas de un proyecto
  const obtenerTareas = async (proyecto) => {
    console.log(proyecto);
    try {
      const resultado = await clienteAxios.get("/api/tareas", {
        params: { proyecto },
      });
      console.log(resultado);
      dispatch({
        type: TAREAS_PROYECTO,
        payload: resultado.data.tareas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // agrego una tarea al proyecto seleccionado
  const agregarTarea = async (tarea) => {
    console.log(tarea);
    try {
      const resultado = await clienteAxios.post("/api/tareas", tarea);
      dispatch({
        type: AGREGAR_TAREA,
        payload: resultado.data.tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //valida y muestra un error
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // Eliminar tarea por su id
  const eliminatTarea = async (id, proyecto) => {
    console.log("eliminatTarea");
    console.log(id);
    console.log(id);
    console.log("eliminatTarea");
    try {
      await clienteAxios.delete(`api/tareas/${id}`, { params: { proyecto } });
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    } catch (error) {}
  };

  //edita / modifica una tarea
  const actualizarTarea = async (tarea) => {
    try {
      const resultado = await clienteAxios.put(
        `/api/tareas/${tarea._id}`,
        tarea
      );
      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: resultado.data.tarea,
      });
    } catch (error) {
      console.error(error);
    }
  };

  //Extrae una tarea para edicion
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  // limpio la tarea
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };
  return (
    <TareaContext.Provider
      value={{
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminatTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
export default TareaState;
