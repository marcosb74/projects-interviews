import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import propTypes from "prop-types";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  // cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    // pasar el gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);
    // reset del form
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos</h2>

      {error ? (
        <Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Por ejemplo transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Costo del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Por ejemplo $300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};
Formulario.prototype = {
  setGasto: propTypes.func.isRequired,
  setCrearGasto: propTypes.func.isRequired,
};
export default Formulario;
