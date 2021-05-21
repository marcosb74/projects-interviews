import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";
function App() {
  //defino el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [resto, setResto] = useState(0);
  const [mostrarPregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);
  // useefect que actualiza el restante

  useEffect(() => {
    if (crearGasto === true) {
      //agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);
    }

    //resta del presupuesto actual
    const presupuestoRestante = resto - gasto.cantidad;
    setResto(presupuestoRestante);
    //reseteo a false
    setCrearGasto(false);
  }, [gasto]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setResto={setResto}
              setPregunta={setPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto presupuesto={presupuesto} resto={resto} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
