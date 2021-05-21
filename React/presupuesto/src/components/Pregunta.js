import React, { Fragment, useState } from "react";
import Error from "./Error";
import propTypes from "prop-types";
const Pregunta = ({ setPresupuesto, setResto, setPregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  //funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };
  //submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // si se pasa la validacion
    setError(false);
    setPresupuesto(cantidad);
    setResto(cantidad);
    setPregunta(false);
  };
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ingrese su presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.prototype = {
  setPresupuesto: propTypes.func.isRequired,
  setResto: propTypes.func.isRequired,
  setPregunta: propTypes.func.isRequired,
};
export default Pregunta;
