import React from "react";
import Gasto from "./Gasto";
import propTypes from "prop-types";
const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.map((gasto) => (
      <Gasto key={gasto.id} gasto={gasto} />
    ))}
  </div>
);

Listado.prototype = {
  gastos: propTypes.array.isRequired,
};

export default Listado;
