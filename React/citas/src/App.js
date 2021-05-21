import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {
  //Citas en local storage.

  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //arreglo de citas
  const [citas, setCitas] = useState(citasIniciales);

  //use effect para realizar ciertas operaciones cuando el state cambia

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);
  //funcion que tome las citas actuales y tome la nueva

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  // funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCita = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCita);
  };
  // mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita cita={cita} key={cita.id} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
