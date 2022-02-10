import React, { useReducer } from "react";
import ProyectoContext from "./proyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMLUARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR,
} from "../../types";
import ClienteAxios from "../../config/axios";
const ProyectoState = (props) => {
  const initialState = {
    proyectos: [],
    formulario: false,
    errorForm: false,
    proyecto: null,
    mensaje: null,
  };

  // dispatch para ejecutar las acciones

  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  // serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };
  //obtengo los proyectos

  const obtenerProyectos = async () => {
    try {
      const resultado = await ClienteAxios.get("/api/proyectos");
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: resultado.data.proyectos,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({ type: PROYECTO_ERROR, payload: alerta });
    }
  };
  //agrego nuevo proyecto

  const agregarProyecto = async (proyecto) => {
    try {
      const resultado = await ClienteAxios.post("/api/proyectos", proyecto);
      console.log(resultado);
      // agrego el proycto en el state
      dispatch({
        type: AGREGAR_PROYECTO,
        payload: resultado.data,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({ type: PROYECTO_ERROR, payload: alerta });
    }
  };
  //valido el formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMLUARIO,
    });
  };
  // Selecciona el proyecto que el usuario clickeo
  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  //elimina un proyecto
  const eliminarProyecto = async (proyectoid) => {
    try {
      await ClienteAxios.delete(`/api/proyectos/${proyectoid}`);
      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoid,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };
      dispatch({ type: PROYECTO_ERROR, payload: alerta });
    }
  };
  return (
    <ProyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorForm: state.errorForm,
        proyecto: state.proyecto,
        mensaje: state.mensaje,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
