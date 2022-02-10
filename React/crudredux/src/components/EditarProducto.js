import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editarProductoAction } from "../actions/productoAction";
import { useNavigate } from "react-router-dom";

const EditarProducto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productoEditar = useSelector((state) => state.productos.productoEditar);
  const [producto, setProducto] = useState({
    nombre: "",
    precio: 0,
  });

  const { nombre, precio } = producto;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editarProductoAction(producto));
    navigate("/");
  };

  useEffect(() => {
    setProducto(productoEditar);
  }, [productoEditar]);

  const onChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  if (!producto) return null;

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre del Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
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
                  onChange={onChange}
                ></input>

                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
