import React from "react";
import PropTypes from "prop-types";
const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Mascota:<span>{cita.mascota}</span>
    </p>
    <p>
      Dueño:<span>{cita.propietario}</span>
    </p>
    <p>
      Fecha:<span>{cita.fecha}</span>
    </p>
    <p>
      Hora:<span>{cita.hora}</span>
    </p>
    <p>
      Hora:<span>{cita.sintomas}</span>
    </p>
    <button
      className="u-full-width button eliminar"
      onClick={() => eliminarCita(cita.id)}
    >
      Eliminar &times;
    </button>
  </div>
);

Cita.prototype = {
  Cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Cita;