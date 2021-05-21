import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  //creo el state de Citas
  const [cita, setCitas] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, setError] = useState(false);
  // defino la funcion que se ejecuta cuando el usuario escribe en un input.
  const handleChange = (e) => {
    setCitas({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // extraigo los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // cuando el usuario presiona agregar cita.
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    //elimino el mensaje previo.
    setError(false);
    // asignar un ID
    cita.id = uuidv4();
    // crear la cita
    crearCita(cita);
    // reiniciar el form
    setCitas({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios!</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota:</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onChange={handleChange}
          value={mascota}
        />
        <label>Nombre Dueño:</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueno de la mascota"
          onChange={handleChange}
          value={propietario}
        />
        <label>Fecha:</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora:</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Sintomas:</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          placeholder="Describa los sintomas de su mascota"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
