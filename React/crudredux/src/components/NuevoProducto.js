import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { crearNuevoProductoAction } from "../actions/productoAction";
import { mostrarAlerta, ocultarAlertaAction } from "../actions/alertaAction";

const NuevoProducto = () => {
  //state del comp
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  const dispatch = useDispatch();

  // accedo al state del store
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector((state) => state.alerta.alerta);
  const handleSubmit = (e) => {
    e.preventDefault();
    //uso use dispatch y crea una fnx

    const agregarProducto = (producto) => {
      //dispatch del action
      dispatch(crearNuevoProductoAction(producto));
    };

    // validar form
    if (nombre.trim() === "" || precio.trim <= 0) {
      const alerta = {
        msg: "Ambos campos son obligatorios",
        classes: "alert alert-danger text-center text-uppercase p-3",
      };
      dispatch(mostrarAlerta(alerta));
      return;
    }
    // si no hay errores
    dispatch(ocultarAlertaAction());
    // dispatch
    agregarProducto({
      nombre,
      precio,
    });

    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            {alerta && <p className={alerta.classes}> {alerta.msg}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre del Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label>Precio del Producto</label>
                <input
                  type="number"
                  className="form-control mb-4"
                  placeholder="Precio del Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => setPrecio(Number(e.target.value))}
                ></input>

                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Agregar
                </button>
              </div>
            </form>
            {cargando && <p>Cargando...</p>}
            {error && (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un error
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
