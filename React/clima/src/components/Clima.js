import React from "react";
import PropTypes from "prop-types";
const Clima = ({ resultado }) => {
  //extraigo los valores

  const { name, main } = resultado;
  // grados Kelvin
  const Kelvin = 273.15;

  if (!name) return null;
  return (
    <div className="card-panel white col s12">
      <div className="back-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {parseFloat(main.temp - Kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p>
          Temperatura Maxima:
          {parseFloat(main.temp_max - Kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103;</span>
        </p>
        <p>
          Temperatura Minima:
          {parseFloat(main.temp_min - Kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Clima;
